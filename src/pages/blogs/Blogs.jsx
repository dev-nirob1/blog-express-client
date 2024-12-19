import { useContext } from 'react';
import { DataContext } from '../../provider/AppContext';
import { AuthContext } from '../../provider/AuthProvider';
import BlogCard from '../../components/shared/BlogCard';
import Categories from '../../components/sidebar/Categories';
import PopularPost from '../../components/sidebar/PopularPost';
import Loader from '../../components/Loader/Loader';
import { Helmet } from 'react-helmet-async';
import SocialMedia from '../../components/sidebar/SocialMedia';
import ScrollToTop from '../../components/ScrollToTop';
import Newsletter from '../../components/sidebar/NewsLetter/NewsLetter';
import AdsBanner from '../../components/AdsBanner';
import PaginationButton from '../../components/PaginationButton';

const Blogs = () => {
    const { blogPerPage, page, setPage, setSearch, paginationSearchBlogs } = useContext(DataContext)
    const { loading } = useContext(AuthContext)

    const { blogs = [], total } = paginationSearchBlogs;

    const handlePageChange = (newPage) => {
        setPage(newPage)
    }

    const handleSearchQuery = (e) => {
        const query = e.target.value;
        // console.log(query)
        setSearch(query)
        setPage(1)
    }

    const totalPages = Math.ceil(total / blogPerPage)

    const pages = totalPages > 0 ? [...Array(totalPages).keys()] : [];

    if (loading) return <Loader />

    return (
        <div className='container mx-auto my-16'>
            <ScrollToTop />
            <Helmet>
                <title>Blogs | BlogExpress</title>
            </Helmet>
            <div className='grid lg:grid-cols-3 gap-3'>
                <div className="lg:col-span-2 px-4">
                    <div className="text-center mb-8">
                        <input
                            onChange={handleSearchQuery}
                            type="search"
                            placeholder="Search blogs..."
                            className="sm:w-1/2 max-w-sm p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        {
                            blogs?.length > 0 ?
                                blogs.map(item => <BlogCard key={item._id} blog={item} />)
                                :
                                <div className="w-full col-span-full text-center text-xl">No blogs found.</div>

                        }

                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && <PaginationButton handlePageChange={handlePageChange} page={page} pages={pages} totalPages={totalPages} />
                    }

                    <AdsBanner />

                </div>
                <div className='col-span-1 px-4'>
                    <Categories />
                    <PopularPost />
                    <SocialMedia />
                    <Newsletter />
                </div>
            </div>
        </div>
    );
};

export default Blogs;
