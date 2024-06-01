import {Link} from 'react-router-dom'
const MoreFromAuthor = () => {
    return (
        <div className="my-8 p-5 border rounded">
            <h3 className="text-2xl font-semibold">
                More From Author Nirob
            </h3>
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="border rounded-lg p-3 bg-gray-50 shadow-lg">
                    <div>
                        <img src="/sidebar-banner.jpg" alt="" />
                    </div>
                    <div className="space-y-3 mt-5">
                        <h3 className="text-2xl font-medium">This is blog title</h3>
                        <p>this is content with sliced data from actual content... <Link className='text-blue-500 hover:underline' to={'/blog/1'}>Read More</Link> </p>
                    </div>
                </div>
                <div className="border rounded-lg p-3 bg-gray-50 shadow-lg">
                    <div>
                        <img src="/sidebar-banner.jpg" alt="" />
                    </div>
                    <div className="space-y-3 mt-5">
                        <h3 className="text-2xl font-medium">This is blog title</h3>
                        <p>this is content with sliced data from actual content... <Link className='text-blue-500 hover:underline' to={'/blog/1'}>Read More</Link> </p>
                    </div>
                </div>
                <div className="border rounded-lg p-3 bg-gray-50 shadow-lg">
                    <div>
                        <img src="/sidebar-banner.jpg" alt="" />
                    </div>
                    <div className="space-y-3 mt-5">
                        <h3 className="text-2xl font-medium">This is blog title</h3>
                        <p>this is content with sliced data from actual content... <Link className='text-blue-500 hover:underline' to={'/blog/1'}>Read More</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreFromAuthor;