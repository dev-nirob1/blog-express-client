import { Link } from "react-router-dom";

const Card = ({ item }) => {
    const { _id, titleImage, category, title, content } = item
    const sanitizeContent = content.replace(/<[^>]+>/g, '')

    return (
        <div key={item}
            className="flex flex-col md:flex-row gap-6 md:items-center p-5 border md:border-0 my-8">

            <div className="relative h-full w-full">
                <img src={titleImage} className="h-full w-full" alt="title image" />
                <p className="absolute top-5 right-5 bg-blue-500 text-white px-1 rounded-full">
                    {category}
                </p>
            </div>
            <div className="w-full h-full">
                <h3 className="text-2xl md:text-xl xl:text-4xl font-medium">
                    {title}
                </h3>
                <p className="text-[16px] md:text-base leading-tight my-3">
                    {sanitizeContent.length > 140 ? sanitizeContent.substr(0, 140) + '... ' : sanitizeContent} <Link to={`/blog/${_id}`} className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>
                </p>
            </div>

        </div>
    );
};

export default Card;