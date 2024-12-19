import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link } from 'react-router-dom'

const PopularPost = () => {
    const { data: popular = [], isLoading } = useQuery({
        queryKey: ["blogs", 'random-blogs'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/random-blogs`);
            return res.data;
        },
    });

    if (isLoading) return <Loader />
    return (
        <div className="border p-5 mb-12">
            <h2 className='text-2xl font-serif font-bold mt-2 mb-6 text-center text-neutral-800'>Popular Blogs</h2>
            {
                popular?.map(item => {
                    return <Link to={`/blog/${item._id}`} key={item._id} className="flex items-center gap-2 border-b p-2">
                        <div className="h-12 w-12 border bg-red-100">
                            <img className="w-fit h-12 object-cover" src={item?.titleImage} alt="" />
                        </div>
                        <p className="font-medium hover:underline text-neutral-900">{item?.title}</p>
                    </Link>
                })
            }

        </div>
    );
};

export default PopularPost;