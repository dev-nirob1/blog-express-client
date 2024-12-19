import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => {
    const { _id, category, titleImage, title, content } = blog
    const sanitizeContent = content.replace(/<[^>]+>/g, '')

    return (
        <div className="flex flex-col border p-3 rounded-lg">
            <div className="relative">
                <img src={titleImage} className="rounded-t-lg w-full h-52" alt="banner image" />
                <p className="rounded-full font-serif px-2 text-gray-50 bg-blue-600 absolute top-5 right-4">{category}</p>
            </div>
            <div className="mt-5">

                <h3 className="text-lg font-medium text-gray-800">
                    {title}
                </h3>
                <p className="text-gray-900 mt-2">
                    {sanitizeContent.length > 150 ? sanitizeContent.substr(0, 150) + '... ' : sanitizeContent}

                    {sanitizeContent?.length > 150 && <Link to={`/blog/${_id}`} className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>}
                </p>
            </div>
        </div>

    );
};

export default BlogCard;