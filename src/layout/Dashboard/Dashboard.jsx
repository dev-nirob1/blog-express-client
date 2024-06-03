import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/sidebar/Sidebar";
import Nav from "../../components/dashboard/navbar/Nav";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5">
            <div>
                <Sidebar />
            </div>
            <div className="col-span-4">
                <Nav/>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;