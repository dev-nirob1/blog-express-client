import { Link } from "react-router-dom";
import Admin from "./Admin";
// import Author from "./Author";
import { FaXmark } from "react-icons/fa6";


const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
    return (
        <div className="bg-white min-h-screen overflow-y-auto pt-16">
            <div className="absolute top-3 right-1 md:hidden z-[999]">
                <button className="p-1 border" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {
                        sidebarOpen &&
                        <FaXmark size={30} />
                    }
                </button>
            </div>
            <div className="text-center">
                <div>
                    <Link to='/'>
                        <h1 className="text-3xl  font-serif font-semibold cursor-pointer"><span className="text-blue-600 font-extrabold">Blog</span>Express</h1>
                    </Link>
                </div>
            </div>

            {/* navlinks  */}
            <div>
                <Admin />
                {/* <Author /> */}
            </div>
        </div>
    );
};

export default Sidebar;