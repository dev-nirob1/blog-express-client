import { useContext, useState } from "react";
import BlogsData from "../../../../components/dashboard/blogsData/BlogsData";
import OutletSearchbar from "../../../../components/dashboard/common/OutletSearchbar";
import { DataContext } from "../../../../provider/AppContext";
import Loader from "../../../../components/Loader/Loader";
import { AuthContext } from "../../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../../components/ScrollToTop";
import Modal from "../../../../components/Modal/Modal";
import ViewBlog from "../../../../components/dashboard/ViewBlog/ViewBlog";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PaginationButton from "../../../../components/PaginationButton";

const ManageBlogs = () => {
    const [blogId, setBlogId] = useState('')
    const { loading } = useContext(AuthContext)
    const [page, setPage] = useState(1)
    const blogsPerPage = 5;

    const {
        openModal,
        isModalOpen,
        closeModal, } = useContext(DataContext);

    const { data: paginationBlogsDashboard = [] } = useQuery({
        queryKey: ['blogs', 'dashboard', page, blogsPerPage],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/dashboard/blogs`, {
                params: {
                    page,
                    limit: blogsPerPage,
                }
            })
            return res.data
        }
    })

    const { result = [], totalBlogs } = paginationBlogsDashboard;
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);

    const handlePageChange = (newPage) => {
        setPage(newPage)
    }

    const pages = totalPages > 0 ? [...Array(totalPages).keys()] : [];


    const handleOpenModal = (id) => {
        setBlogId(id)
        openModal()
    }


    if (loading) {
        return <Loader />
    }

    return (
        <div className="py-5 w-[95%] mx-auto">
            <ScrollToTop />

            <Helmet>
                <title>Manage Blogs | Blog Express</title>
            </Helmet>
            <OutletSearchbar routeName="Total blogs" length={totalBlogs} />

            <div className="overflow-x-auto">
                <table className="text-sm w-full text-left overflow-x-hidden border">
                    <thead className="border text-neutral-700">
                        <tr className="w-full">
                            <th className="p-2">SL</th>
                            <th className="p-2">Title</th>
                            <th className="p-2">Author</th>
                            <th className="p-2">Status</th>
                            <th className="p-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result?.length > 0 ? (
                            result.map((item, index) => (
                                <BlogsData key={item._id} handleOpenModal={handleOpenModal} blogs={item} index={index} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4">
                                    No blogs available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
                    {
                        blogId && <ViewBlog id={blogId} />
                    }
                </Modal>

                {
                    totalPages > 1 && <PaginationButton handlePageChange={handlePageChange} page={page} pages={pages} totalPages={totalPages} />

                }
            </div>
        </div>
    );
};

export default ManageBlogs;
