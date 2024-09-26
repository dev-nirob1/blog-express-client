import { useContext } from "react";
import { DataContext } from "../../provider/AppContext";
import BlogCard from "../shared/BlogCard";
import { AuthContext } from "../../provider/AuthProvider";

const RecentBlogs = () => {
    const { blogs } = useContext(DataContext)
    const {loading} = useContext(AuthContext)
    if(loading) return <div className="text-5xl">Loading</div>
    return (
        <div>
            <h2 className='text-3xl font-serif font-bold mt-2 mb-6 text-neutral-800'>Recent Blogs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                   blogs && blogs?.blogs.map(item => <BlogCard key={item._id} blog={item} />)

                }
            </div>
        </div>
    );
};

export default RecentBlogs;