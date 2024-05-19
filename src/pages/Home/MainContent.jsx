import AdsBanner from "../../components/AdsBanner";
import EditorsPick from "../../components/EditorsPick";
import RecentBlogs from "../../components/RecentBlogs";

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