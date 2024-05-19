import AdsBanner from "../../components/AdsBanner";
import RecentBlogs from "../../components/RecentBlogs";

const MainContent = () => {
    return (
        <div className="p-5 rounded-lg">
            <RecentBlogs />
            <AdsBanner />
            
        </div>
    );
};

export default MainContent;