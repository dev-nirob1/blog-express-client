import moment from "moment";
import { Link } from "react-router-dom";

const Details = ({ singleBlog }) => {
    const { title, author, titleImage, content, postAt } = singleBlog;
    return (
        <div className="border p-5 mt-5 rounded">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <div className="my-5">
                <Link to={`/author/${author?.email}`} className="flex items-center justify-start gap-3 mb-3 group">

                    <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                        <img className="rounded-full" src={author?.profileImage ? author.profileImage : 'https://i.ibb.co.com/zFMrg3c/avatar.png'} alt="user profile" />
                    </div>
                    <div className='text-sm text-gray-600 font-medium'>
                        <p className='group-hover:underline'>{author?.name}</p>
                        <p className='group-hover:underline'>{moment(postAt).format("MMM Do YYYY")}</p>
                    </div>
                </Link>
            </div>
            <div>
                {/* banner image  */}
                <img className="w-full h-[350px]" src={titleImage} alt="banner" />
                <div dangerouslySetInnerHTML={{__html: content}} className="mt-8">
                    
                </div>
            </div>
        </div>

    );
};

export default Details;