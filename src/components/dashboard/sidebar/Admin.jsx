import { FaEdit, FaHome, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const Admin = () => {
    const {logOut} = useContext(AuthContext)
    return (
        <div className="py-8 px-5">
            <ul className="space-y-2 text-lg md:text-xl font-semibold">
                <li className="border-b">
                    <Link to='/dashboard/admin' className="py-2 hover:bg-gray-50 flex gap-3">
                        <FaHome size={25} /> Discover
                    </Link>
                </li>
                <li className="border-b">
                    <Link to="/dashboard/manage-users" className="py-2 hover:bg-gray-50 flex items-center gap-3">
                        <FaUsers />Manage Users
                    </Link>
                </li>
                <li className="border-b">
                    <Link to="/dashboard/manage-blogs" className="py-2 hover:bg-gray-50 flex items-center gap-3">
                        <MdOutlineLibraryBooks size={25} />
                       Manage Blogs
                    </Link>
                </li>
                <li className="border-b">
                    <Link to="/dashboard/add-blog" className="py-2 hover:bg-gray-50 flex items-center gap-3">
                        <FaEdit size={25} /> Add Blog
                    </Link>
                </li>
                <li className="border-b">
                    <Link to='/dashboard/profile' className="py-2 hover:bg-gray-50 flex items-center gap-3">
                        <img src="/banner.jpg" className="h-7 w-7 rounded-full" alt="profile image" />
                        Profile
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

export default Admin;