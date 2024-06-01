import SideMenu from "../../components/sidebar/SideMenu";
import Details from "./Details";
import MoreFromAuthor from "./MoreAuthorContent/MoreFromAuthor";

const BlogDetails = () => {
    return (
        <div className="container mx-auto my-16">
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
                    <Details />
                    <MoreFromAuthor />
                </div>
                <div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;