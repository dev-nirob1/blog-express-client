import OutletSearchbar from "../../../components/dashboard/common/OutletSearchbar";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const MyBlogs = () => {
    return (
        <div className="py-5 w-[95%] mx-auto">
            <OutletSearchbar
                routeName='My Blogs'
                length={9}
            />

            <div className="overflow-x-auto">
                <table className="text-sm w-full text-left overflow-x-hidden border">
                    <thead className="border text-neutral-700">
                        <tr className="w-full">
                            <th className="p-2">SL</th>
                            <th className="p-2">Image</th>
                            <th className="p-2">Title</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Action</th>
                            {/* <th className="p-2">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>1</td>
                            <td>
                                <img src="image" alt="title" />
                            </td>
                            <td>title </td>
                            <td>
                                <span className="py-1 px-3 rounded font-medium bg-yellow-500">Pending</span> 
                                <span className="py-1 px-3 rounded font-medium bg-green-500 text-gray-100">Published</span>
                            </td>

                            <td className="flex items-center gap-3">
                                <button className="border p-1 rounded text-blue-500"><FaEye size={21}/> </button>
                                <button className="border p-1 rounded text-green-500">
                                    <FaEdit size={21} />
                                </button>
                                <button className="border p-1 rounded text-red-500">
                                    <FaTrash size={21} />
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBlogs;