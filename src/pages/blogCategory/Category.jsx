import { NavLink, useLoaderData, useParams, } from 'react-router-dom';
import data from './../../utilities/data'
import BlogCard from '../../components/shared/BlogCard';
import ScrollToTop from '../../components/ScrollToTop';
import { Helmet } from 'react-helmet-async'

const Category = () => {
    const blogsByCategory = useLoaderData()
    const { category } = useParams();

    return (
        <div className="lg:container mx-auto w-full mb-16">
            <Helmet>
            <title>{category ? `${category} | Blog Express` : 'Blog Express'}</title>
            </Helmet>
            <ScrollToTop />
            <div className="flex gap-10 items-center lg:justify-center whitespace-nowrap overflow-x-auto px-5 py-5 bg-blue-400">
                {
                    data.map(item =>
                        <div key={item.id}>
                            <img className='w-9 md:w-12 mx-auto' src={item.icon} alt="icon" />
                            <NavLink to={`/blogs/${item.name}`} className={({ isActive }) => `${isActive && 'underline font-bold'} text-white`}>{item.name}</NavLink>
                        </div>)
                }
            </div>

            <div className="mt-8 px-5">
                {blogsByCategory?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {blogsByCategory.map(blog => (
                            <BlogCard key={blog._id} blog={blog} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center col-span-full mt-5">No blogs found in this category.</p>
                )}
            </div>

        </div>
    );
};

export default Category;