import { useContext } from "react";
import { FaEdit, FaHome} from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Author = () => {
    const {logOut} = useContext(AuthContext)

    return (
        <div className="py-8 px-5">
            <ul className="space-y-2 text-lg md:text-xl font-semibold">
                <li className="border-b">
                    <Link to='/dashboard/author' className="py-2 hover:bg-gray-50 flex gap-3">
                        <FaHome size={25} /> Overview
                    </Link>
                </li>
                <li className="border-b">
                    <Link to="/dashboard/my-blogs" className="py-2 hover:bg-gray-50 flex items-center gap-3">
                        <MdOutlineLibraryBooks size={25} /> My Blogs
                    </Link>
                </li>
                <li className="border-b">
                    <Link to='/dashboard/add-blog' className="py-2 hover:bg-gray-50 flex items-center gap-3">
                        <FaEdit size={25} /> Add Blog
                    </Link>
                </li>
            </ul>
            <div className="text-lg md:text-xl font-semibold mt-10">
                <button onClick={()=>{logOut()}} className="py-2 hover:bg-gray-50 w-full flex items-center gap-3">
                    <TbLogout2 size={25} /> Logout
                </button>
            </div>
        </div>
    );
};

export default Author;