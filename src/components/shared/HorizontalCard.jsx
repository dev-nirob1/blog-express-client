import { Link } from "react-router-dom";

const HorizontalCard = ({ blog }) => {
    const sanitizeContent = blog?.content.replace(/<[^>]+>/g, '')


    return (
        <div className="w-full h-[60vh] mb-8 px-1">
            <div className="w-full h-full relative rounded-lg">
                <div className="w-full h-full">
                    <img className="w-full h-full rounded-lg" src={blog?.titleImage} alt="" />
                </div>
                <div className="w-full h-full absolute bottom-0 left-0 flex items-end justify-center text-center bg-gradient-to-b from-slate-600/40 to-black/60 rounded-lg">
                    <div className="absolute left-5 top-5">
                        <p className="rounded-full font-serif px-2 text-gray-50 bg-blue-600">
                            {blog?.category}
                        </p>
                    </div>
                    <Link to='/' className="text-gray-100 font-semibold p-10 space-y-3">
                        <h1 className="text-3xl md:text-5xl hover:underline">{blog?.title}</h1>
                        <p className="text-sm md:text-base lg:text-lg hover:underline"> {sanitizeContent.length > 150 && sanitizeContent.substr(0, 150) + '...'}</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HorizontalCard;