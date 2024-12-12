import AdsBanner from "../../components/AdsBanner";
import EditorsPick from "../../components/EditorsPick/EditorsPick";
import RecentBlogs from "../../components/recentblogs/RecentBlogs";

const MainContent = () => {
    return (
        <div className="p-5 rounded-lg">
            <RecentBlogs />
            <AdsBanner />
            <EditorsPick />
        </div>
    );
};

export default MainContent;