import { useContext } from "react";
import { FaBars, FaBell } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AuthContext } from "../../../provider/AuthProvider";

const Nav = ({ setSidebarOpen, sidebarOpen, open, setOpen }) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className="px-4 md:px-10 shadow border-b flex items-center justify-between h-16 bg-white">
            <div className="block md:hidden">
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="focus:outline-none">
                    <FaBars size={25} />
                </button>
            </div>
            <div className="flex items-center">
                <input type="text" className="bg-gray-50 max-w-2xl md:w-64 border p-1 rounded" placeholder="Search something" />
                <FaMagnifyingGlass className="-ml-6 cursor-pointer" size={18} />
            </div>

            <div className="relative flex items-center justify-center gap-2 md:gap-5">
                <div className="relative">
                    <button className="rounded-full block hover:bg-gray-50 p-2">
                        <FaBell size={20} />
                    </button>
                </div>
                <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                    <img alt={'user'} className="w-10 h-10 rounded-full" src={user?.photoURL} title={user?.displayName} />
                </div>

            </div>
        </div>
    );
};

export default Nav;