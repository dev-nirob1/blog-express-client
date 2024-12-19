import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Details from "../../../pages/blogDetails/Details";
import moment from "moment";
import { Link } from "react-router-dom";

const ViewBlog = ({ id }) => {
    const { data: singleBlog } = useQuery({
        queryKey: ['blog', id],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/blog/${id}`)
            return res.data
        }
    })
    console.log(singleBlog);
    return (
        <>
        <div className="border p-5 mt-5 rounded h-full overflow-y-scroll">
            <h1 className="text-3xl font-semibold">{singleBlog?.title}</h1>
            <div className="my-5">
                <Link to={`/author/${singleBlog?.author?.email}`} className="flex items-center justify-start gap-3 mb-3 group w-fit">

                    <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                        <img className="rounded-full" src={singleBlog?.author?.profileImage ? singleBlog?.author.profileImage : 'https://i.ibb.co.com/zFMrg3c/avatar.png'} alt="user profile" />
                    </div>
                    <div className='text-sm text-gray-600 font-medium'>
                        <p className='group-hover:underline'>{singleBlog?.author?.name}</p>
                        <p className='group-hover:underline'>{moment(singleBlog?.postAt).format("MMM Do YYYY")}</p>
                    </div>
                </Link>
            </div>
            <div>
                {/* banner image  */}
                <img className="w-full h-[350px]" src={singleBlog?.titleImage} alt="banner" />
                <div dangerouslySetInnerHTML={{ __html: singleBlog?.content }} className="mt-8">

                </div>
            </div>
        </div>
        </>
    );
};

export default ViewBlog;