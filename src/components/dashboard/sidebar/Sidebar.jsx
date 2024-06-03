import Admin from "./Admin";
import Author from "./Author";
import { FaXmark } from "react-icons/fa6";


const Sidebar = ({ setSidebarOpen, sidebarOpen }) => {
    return (
        <div className="bg-white shadow-lg min-h-screen overflow-y-auto">
            <div className="absolute top-3 -right-0 md:hidden z-[999]">
                <button className="p-1 border" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {
                        sidebarOpen &&
                        <FaXmark size={30} />
                    }
                </button>
            </div>

            {/* navlinks  */}
            <Admin />
            <Author/>
            <Author/>
        </div>
    );
};

export default Sidebar;