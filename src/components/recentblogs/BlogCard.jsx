import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    const { _id, category, titleImage, title, content, author } = blog


    return (
        <div className="flex flex-col border p-4 rounded-lg">
            <div className="relative">
                <img src={titleImage} className="rounded-t-lg w-full" alt="banner image" />
                <p className="rounded-full font-serif px-2 text-gray-50 bg-blue-500 absolute top-5 right-4">{category}</p>
            </div>
            <div className="mt-5">
                <Link to={`/author/${author.email}`} className="flex items-center justify-start gap-3 mb-3 group">

                    <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                        <img src={author?.profileImage} alt="author profile" />
                    </div>
                    <div className='text-sm text-gray-600 font-medium'>
                        <p className='group-hover:underline'>Al Hasan</p>
                        <p className='group-hover:underline'>August 20, 2022</p>
                    </div>
                </Link>

                <h3 className="text-xl font-medium">
                    {title}
                </h3>
                <p className="primary-text my-3">
                    {content} <Link to={`blog/${_id}`} className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>
                </p>
            </div>
        </div>

    );
};

export default BlogCard;