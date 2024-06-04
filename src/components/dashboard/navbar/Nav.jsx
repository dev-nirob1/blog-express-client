import { FaBars, FaBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Nav = ({ setSidebarOpen, sidebarOpen, open, setOpen }) => {

    return (
        <div className="px-4 md:px-10 shadow border-b flex items-center justify-between h-16 bg-white">
            <div className="block md:hidden">
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="focus:outline-none">
                    <FaBars size={25} />
                </button>
            </div>
            <div className="flex items-center">
                <input type="text" className="bg-gray-50 max-w-2xl md:w-64 border p-1 rounded" placeholder="Search something" />
                <FaMagnifyingGlass className="-ml-6 cursor-pointer" size={20} />
            </div>

            <div className="relative flex items-center justify-center gap-2 md:gap-5">
                <div className="relative">
                    <Link to='/dashboard/notification' className="rounded-full block hover:bg-gray-50 p-2">
                        <FaBell size={20} />
                    </Link>
                    {/* <div className="hidden group-hover:absolute top-10 right-0 bg-gray-50 border shadow w-48 p-3 rounded">
                        <p className="p-2">No notifications here</p>
                    </div> */}
                </div>
                <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                    <img alt="Tailwind CSS Navbar component" className="w-10 h-10 rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <ul tabIndex={0} className={`mt-3 z-[1] shadow bg-white rounded-box w-52 ${open ? 'absolute top-8 right-0' : 'hidden'} py-2 rounded-b-lg`}>

                    <li>
                        <Link to='/dashboard/profile' className="block hover:bg-gray-50 p-2 border-b">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <button className="block hover:bg-gray-50 w-full text-left p-2">Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;