import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import Nav from "../../components/dashboard/navbar/Nav";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Loader from "../../components/Loader/Loader";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const { loading } = useContext(AuthContext)
    
    if (loading) return <Loader />
    return (
        <div className="flex min-h-[100vh] 2xl:container 2xl:mx-auto bg-gray-50">

            <div className={`fixed inset-0 md:relative md:block z-40 md:z-auto transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-64`}>
                <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            </div>

            <div className="flex-1">
                <Nav setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} open={open} setOpen={setOpen} />
                <div className="my-5 md:my-8 shadow bg-white min-h-[calc(100vh-140px)]">
                    <Outlet />
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Dashboard;