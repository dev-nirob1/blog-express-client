import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Header/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-150px)]">
                <Outlet />
            </div>
            <Footer />
        <ToastContainer/>
        </div>
    );
};

export default MainLayout;