import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Header/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-150px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;