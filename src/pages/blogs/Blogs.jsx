import { useContext } from 'react';
import { DataContext } from '../../provider/AppContext';
import { AuthContext } from '../../provider/AuthProvider';
import BlogCard from '../../components/shared/BlogCard';
import Categories from '../../components/sidebar/Categories';
import PopularPost from '../../components/sidebar/PopularPost';

const Blogs = () => {
    const { blogPerPage, page, setPage, setSearch, paginationSearchBlogs } = useContext(DataContext)
    const { loading } = useContext(AuthContext)
    // console.log(paginationSearchBlogs)
    const { blogs = [], total } = paginationSearchBlogs;

    const handlePageChange = (newPage) => {
        setPage(newPage)
    }

    const handleSearchQuery = (e) => {
        const query = e.target.value;
        console.log(query)
        setSearch(query)
        setPage(1)
    }

    const totalPages = Math.ceil(total / blogPerPage)

    const pages = totalPages > 0 ? [...Array(totalPages).keys()] : [];

    console.log(paginationSearchBlogs)

    if (loading) {
        return <div className='text-5xl'>loading...</div>
    }
    return (
        <div className='container mx-auto my-16'>
            <div className='grid lg:grid-cols-3 gap-3'>
                <div className="lg:col-span-2 px-4">
                    {/* Search Bar */}
                    <div className="text-center mb-8">
                        {/* <h1>blogs</h1> */}
                        <input
                            onChange={handleSearchQuery}
                            type="search"
                            placeholder="Search blogs..."
                            className="sm:w-1/2 max-w-sm p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Blogs List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Blog Card */}

                        {
                            blogs?.length > 0 ?
                                blogs.map(item => <BlogCard key={item._id} blog={item} />)
                                :
                                <div className="text-center text-xl">No blogs found.</div>

                        }

                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && <div className="flex justify-center mt-8">
                        <nav className="inline-flex space-x-2">
                            {/* Previous Button */}
                            <button
                                onClick={() => handlePageChange(page - 1)}
                                disabled={page === 1}
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
                                onClick={() => handlePageChange(page + 1)}
                                disabled={page === totalPages}
                                className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 disabled:opacity-50"
                            >
                                Next
                            </button>
                        </nav>
                    </div>}

                </div>
                <div className='col-span-1 px-4'>
                    <Categories />
                    <PopularPost />
                </div>
            </div>
        </div>
    );
};

export default Blogs;
