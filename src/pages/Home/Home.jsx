import { Helmet } from "react-helmet-async";
import SideMenu from "../../components/sidebar/SideMenu";
import Banner from "./Banner";
import MainContent from "./MainContent";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Blog Express</title>
            </Helmet>
            <Banner />
            <div className="grid lg:grid-cols-3 gap-5 container mx-auto my-20">
                <div className="col-span-2 border mt-5">
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