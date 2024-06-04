import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import Nav from "../../components/dashboard/navbar/Nav";
import { useEffect, useRef, useState } from "react";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const collapseRef = useRef(null)

    const handleClickOutside = e => {
        if (collapseRef?.current && !collapseRef?.current?.contains(e.target)) {
            setSidebarOpen(false)
            setOpen(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div ref={collapseRef} className="flex 2xl:container 2xl:mx-auto bg-gray-50">

            <div className={`fixed inset-0 md:relative md:block z-40 md:z-auto transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-64`}>
                <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
            </div>

            <div className="flex-1">
                <Nav setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} open={open} setOpen={setOpen} />
                <div className="my-5 md:my-8 shadow bg-white min-h-[calc(100vh-140px)]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;