import { useContext } from "react";
import { FaEdit, FaHome } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Author = () => {
    const { logOut } = useContext(AuthContext)

    return (
        <div className="py-8 px-5">
            <ul className="space-y-2 text-lg md:text-xl font-semibold">
                <li className="border-b">
                    <NavLink to='/'
                        className={({ isActive }) => `${isActive && 'bg-slate-100'} p-2 my-1 hover:bg-slate-50 flex items-center gap-3 rounded`}>
                        <FaHome size={25} /> Home
                    </NavLink>
                </li>
                <li className="border-b">
                    <NavLink to='/dashboard/author'
                        className={({ isActive }) => `${isActive && 'bg-slate-100'} p-2 my-1 hover:bg-slate-50 flex items-center gap-3 rounded`}>
                        <ImStatsBars size={25} />Overview
                    </NavLink>
                </li>
                <li className="border-b">
                    <NavLink to="/dashboard/my-blogs"
                        className={({ isActive }) => `${isActive && 'bg-slate-100'} p-2 my-1 hover:bg-slate-50 flex items-center gap-3 rounded`}>
                        <MdOutlineLibraryBooks size={25} /> My Blogs
                    </NavLink>
                </li>
                <li className="border-b">
                    <NavLink to='/dashboard/add-blog'
                        className={({ isActive }) => `${isActive && 'bg-slate-100'} p-2 my-1 hover:bg-slate-50 flex items-center gap-3 rounded`}>
                        <FaEdit size={25} /> Add Blog
                    </NavLink>
                </li>
            </ul>
            <div className="text-lg md:text-xl font-semibold mt-10">
                <button onClick={() => { logOut() }}
                    className="py-2 hover:bg-slate-50 w-full flex items-center gap-3">
                    <TbLogout2 size={25} /> Logout
                </button>
            </div>
        </div>
    );
};

export default Author;