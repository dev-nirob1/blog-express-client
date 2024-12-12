import Categories from "./Categories";
import PopularPost from "./PopularPost";
import SidebarAds from "./SidebarAds";
import SocialMedia from "./SocialMedia";


const SideMenu = () => {
    return (
        <div className="p-5">
            <Categories />
            <PopularPost />
            <SocialMedia />
            <SidebarAds/>
        </div>
    );
};

export default SideMenu;