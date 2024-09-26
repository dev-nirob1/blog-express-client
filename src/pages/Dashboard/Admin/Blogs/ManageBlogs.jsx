import { useContext } from "react";
import BlogsData from "../../../../components/dashboard/blogsData/BlogsData";
import OutletSearchbar from "../../../../components/dashboard/common/OutletSearchbar";
import { DataContext } from "../../../../provider/AppContext";

const ManageBlogs = () => {
    const { blogs } = useContext(DataContext)
    
    return (
        <div className="py-5 w-[95%] mx-auto">
            <OutletSearchbar
                routeName='Total blogs'
                length={blogs?.blogs.length}
            />

            <div className="overflow-x-auto">
                <table className="text-sm w-full text-left overflow-x-hidden border">
                    <thead className="border text-neutral-700">
                        <tr className="w-full">
                            <th className="p-2">SL</th>
                            <th className="p-2">Title</th>
                            <th className="p-2">Author</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs?.blogs.map((item, index) => <BlogsData key={item._id} blogs={item} index={index} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBlogs;