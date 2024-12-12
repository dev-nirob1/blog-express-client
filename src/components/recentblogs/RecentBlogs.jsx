import { useContext } from "react";
import { DataContext } from "../../provider/AppContext";
import BlogCard from "../shared/BlogCard";
import HorizontalCard from "../shared/HorizontalCard";

const RecentBlogs = () => {
    const { recentBlogs } = useContext(DataContext)
    return (
        <div>
            <h2 className='text-3xl font-serif font-bold mt-2 mb-6 text-neutral-800'>Recent Blogs</h2>
            {recentBlogs[0] && <HorizontalCard blog={recentBlogs[0]} />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    recentBlogs.slice(1)?.map((item) => <BlogCard key={item._id} blog={item} />)

                }
            </div>
        </div>
    );
};

export default RecentBlogs;