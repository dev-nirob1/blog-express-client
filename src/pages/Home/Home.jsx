import { Helmet } from "react-helmet-async";
import SideMenu from "../../components/sidebar/SideMenu";
import Banner from "./Banner";
import MainContent from "./MainContent";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {

    return (
        <div>
            <ScrollToTop/>
            <Helmet>
                <title>Blog Express</title>
            </Helmet>
            <Banner />
            <div className="grid lg:grid-cols-3 gap-5 container mx-auto my-20">
                <div className="col-span-2 md:border mt-5">
                    <MainContent />
                </div>
                <div className="col-span-1">
                    <SideMenu />
                </div>
            </div>
        </div>
    );
};

export default Home;