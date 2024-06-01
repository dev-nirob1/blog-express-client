import SideMenu from "../../components/sidebar/SideMenu";
import Banner from "./Banner";
import MainContent from "./MainContent";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="grid lg:grid-cols-3 gap-5 container mx-auto my-16">
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