import SideMenu from "../../components/SideMenu";
import Banner from "./Banner";
import MainContent from "./MainContent";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="grid grid-cols-3 gap-5 container mx-auto my-16">
                <div className="col-span-2">
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