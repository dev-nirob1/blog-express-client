import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OutletSearchbar from "../../../components/dashboard/common/OutletSearchbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Loader from "../../../components/Loader/Loader";
import Data from "./Data";
import { DataContext } from "../../../provider/AppContext";
import Swal from "sweetalert2/dist/sweetalert2";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../components/ScrollToTop";
import Modal from "../../../components/Modal/Modal";
import ViewBlog from "../../../components/dashboard/ViewBlog/ViewBlog";

const MyBlogs = () => {
    const [blogId, setBlogId] = useState('')

    const { user } = useContext(AuthContext)
    const { deleteBlog, refetchBlogs, openModal, closeModal, isModalOpen } = useContext(DataContext)

    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ["blogs", user?.email],
        queryFn: async () => {
            const response = await axios.get(`https://blog-express-server.vercel.app/blogs/dashboard/${user?.email}`);
            return response.data;
        },
    });

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await deleteBlog(id);
                console.log(response)
                if (response.deletedCount > 0) {
                    Swal.fire("Deleted!", "Blog has been deleted.");
                    refetchBlogs()
                }
            }
        });
    }

    const handleOpenModal = (id) => {
        setBlogId(id)
        openModal()
    }

    if (isLoading) return <Loader />;

    return (
        <div className="py-5 w-[95%] mx-auto">
            <ScrollToTop />
            <Helmet>
                <title>My Blogs | Blog Express</title>
            </Helmet>
            <OutletSearchbar routeName="My Blogs" length={blogs.length} />

            <div className="overflow-x-auto mt-5">
                {blogs.length === 0 ? (
                    <p className="text-center text-xl font-semibold text-gray-600">No blogs found. Start by creating one!</p>
                ) : (
                    <table className="text-sm w-full text-left overflow-x-hidden border">
                        <thead className="border text-neutral-700">
                            <tr className="w-full">
                                <th className="p-2">SL</th>
                                <th className="p-2">Image</th>
                                <th className="p-2">Title</th>
                                <th className="p-2">Status</th>
                                <th className="p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs?.map((blog, index) => <Data
                                    handleOpenModal={handleOpenModal}
                                    key={blog._id} blog={blog}
                                    handleDelete={handleDelete}
                                    index={index} />)
                            }
                        </tbody>
                    </table>
                )}
            </div>
            <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
                <ViewBlog id={blogId} />
            </Modal>
        </div>
    );
};

export default MyBlogs;
