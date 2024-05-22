import Categories from "./Categories";
import PopularPost from "./PopularPost";
import SocialMedia from "./SocialMedia";

const SideMenu = () => {
    return (
        <div className="p-5">
            <Categories />
            <PopularPost />
            <SocialMedia />
        </div>
    );
};

export default SideMenu;