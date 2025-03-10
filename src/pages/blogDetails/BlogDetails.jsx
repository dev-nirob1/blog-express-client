import { useLoaderData } from "react-router-dom";
import SideMenu from "../../components/sidebar/SideMenu";
import Details from "./Details";
import MoreFromAuthor from "./MoreAuthorContent/MoreFromAuthor";
import AdsBanner from "../../components/AdsBanner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ScrollToTop from "../../components/ScrollToTop";


const BlogDetails = () => {
    const singleBlog = useLoaderData()
    // console.log(singleBlog)

    const { data: authorBlogs = [] } = useQuery({
        queryKey: ['blogs', singleBlog.author?.email],
        queryFn: async () => {
            if (!singleBlog.author?.email) return [];
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/blogs/${singleBlog.author?.email}`);
            return res.data;
        },
    });

    const filterdBlogs = authorBlogs?.filter(blog => blog?._id !== singleBlog?._id)

    return (
        <div className="container mx-auto my-16">
            <ScrollToTop/>
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
                    <Details singleBlog={singleBlog} />
                    <AdsBanner />
                    {filterdBlogs.length > 0 && <MoreFromAuthor blogs={filterdBlogs} />}

                </div>
                <div>
                    <SideMenu></SideMenu>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;