import { useContext } from "react";
import BlogsData from "../../../../components/dashboard/blogsData/BlogsData";
import OutletSearchbar from "../../../../components/dashboard/common/OutletSearchbar";
import { DataContext } from "../../../../provider/AppContext";
import Loader from "../../../../components/Loader/Loader";
import { AuthContext } from "../../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../../components/ScrollToTop";

const ManageBlogs = () => {
    const { blogPage, setBlogPage, blogsPerPage, paginationBlogsDashboard } = useContext(DataContext);
    const {loading} = useContext(AuthContext)
    
    const { result = [], totalBlogs } = paginationBlogsDashboard;
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);

    const handlePageChange = (newPage) => {
        setBlogPage(newPage)
    }

    const pages = totalPages > 0 ? [...Array(totalPages).keys()] : [];
    console.log('data',result, 'totalpages',totalPages, 'blogspage',blogPage,'blogsperpage', blogsPerPage);
    if(loading){
        return <Loader/>
    }

    return (
        <div className="py-5 w-[95%] mx-auto">
            <ScrollToTop/>
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
                                <BlogsData key={item._id} blogs={item} index={index} />
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

                {totalPages > 1 && <div className="flex justify-center mt-8">
                    <nav className="inline-flex space-x-2">
                        {/* Previous Button */}
                        <button
                            onClick={() => handlePageChange(blogPage - 1)}
                            disabled={blogPage === 1}
                            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 disabled:opacity-50"
                        >
                            Previous
                        </button>

                        {/* Page Numbers */}
                        {
                            pages.map((item, i) => <button
                                key={i}
                                onClick={() => handlePageChange(item + 1)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                {item + 1}
                            </button>)
                        }

                        {/* Next Button */}
                        <button
                            onClick={() => handlePageChange(blogPage + 1)}
                            disabled={blogPage === totalPages}
                            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </nav>
                </div>}
            </div>
        </div>
    );
};

export default ManageBlogs;
