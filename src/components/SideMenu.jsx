import PopularPost from "./PopularPost";
import SocialMedia from "./SocialMedia";

const SideMenu = () => {
    return (
        <div className="p-5">
            <PopularPost/>
            <SocialMedia/>
        </div>
    );
};

export default SideMenu;