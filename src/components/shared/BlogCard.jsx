import { Link } from "react-router-dom";
import moment from 'moment'
const BlogCard = ({ blog }) => {
    const { _id, category, titleImage, title, content, author, postAt } = blog
    const sanitizeContent = content.replace(/<[^>]+>/g, '')

    return (
        <div className="flex flex-col border p-3 rounded-lg">
            <div className="relative">
                <img src={titleImage} className="rounded-t-lg w-full h-52" alt="banner image" />
                <p className="rounded-full font-serif px-2 text-gray-50 bg-blue-500 absolute top-5 right-4">{category}</p>
            </div>
            <div className="mt-5">
                <Link to={`/author/${author.email}`} className="flex items-center justify-start gap-3 mb-2 w-fit group">

                    <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                        <img className="rounded-full" src={author?.profileImage ? author.profileImage : 'https://i.ibb.co.com/zFMrg3c/avatar.png'} alt="author profile" />
                    </div>
                    <div className='text-sm text-gray-600 font-medium'>
                        <p className='group-hover:underline'>{author?.name}</p>
                        <p className='group-hover:underline'>{moment(postAt).format("MMM Do YYYY")}</p>
                    </div>
                </Link>

                <h3 className="text-lg font-medium">
                    {title}
                </h3>
                <p className="text-gray-600 mt-2">
                    {sanitizeContent.length > 150 ? sanitizeContent.substr(0, 150) + '... ' : sanitizeContent}

                    {sanitizeContent?.length > 150 && <Link to={`/blog/${_id}`} className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>}
                </p>
            </div>
        </div>

    );
};

export default BlogCard;