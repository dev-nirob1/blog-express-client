import { useContext } from "react";
import { DataContext } from "../../provider/AppContext";
import BlogCard from "../shared/BlogCard";

const RecentBlogs = () => {
    const { blogs } = useContext(DataContext)
    return (
        <div>
            <h2 className='text-3xl font-serif font-bold mt-2 mb-6 text-neutral-800'>Recent Blogs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    blogs.map(item => <BlogCard key={item._id} blog={item} />)

                }
            </div>
        </div>
    );
};

export default RecentBlogs;