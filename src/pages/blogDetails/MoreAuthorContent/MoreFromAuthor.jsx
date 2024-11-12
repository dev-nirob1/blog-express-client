import { Link } from 'react-router-dom'

const MoreFromAuthor = ({ blogs }) => {

    const sanitizeContent = (content) => {
        return content.replace(/<[^>]+>/g, '');
    }
    return (
        <div className="my-8 p-5 border rounded">
            <h3 className="text-2xl font-semibold">
                More From Author Nirob
            </h3>
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    blogs.map(item => <div key={item._id} className="border rounded-lg p-3 bg-gray-50 shadow-lg">
                        <div>
                            <img src={item?.titleImage} alt="image" />
                        </div>
                        <div className="space-y-3 mt-5">
                            <h3 className="text-xl font-medium">{item?.title}</h3>
                            <p>
                                <span>
                                    {
                                        sanitizeContent(item?.content.length > 150 ? item?.content.substr(0, 100) + '... ' : item?.content)
                                    }
                                </span>
                                {item?.content?.length > 100 && <Link to={`/blog/${item?._id}`} className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>}
                            </p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MoreFromAuthor;