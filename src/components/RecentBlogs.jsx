import { Link } from 'react-router-dom'
const RecentBlogs = () => {
    return (
        <div>
            <h2 className='text-3xl font-serif font-bold mt-2 mb-6 text-neutral-800'>Recent Blogs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col border p-4 rounded-lg">
                    <div className="relative">
                        <img src="/banner.jpg" className="rounded-t-lg" alt="banner image" />
                        <p className="rounded-full font-serif px-2 text-gray-50 bg-blue-500 absolute top-5 right-4">Category</p>
                    </div>
                    <div className="mt-5">
                        <Link to="/blog/1" className="flex items-center justify-start gap-3 mb-3 group">

                            <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                                {/* todo:replce with a image */}
                            </div>
                            <div className='text-sm text-gray-600 font-medium'>
                                <p className='group-hover:underline'>Al Hasan</p>
                                <p className='group-hover:underline'>August 20, 2022</p>
                            </div>
                        </Link>

                        <h3 className="text-xl font-medium">
                            5 Easy Ways You Can Turn Future Into Success.
                        </h3>
                        <p className="primary-text my-3">
                            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,… <Link className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col border p-4 rounded-lg">
                    <div className="relative">
                        <img src="/banner.jpg" className="rounded-t-lg" alt="banner image" />
                        <p className="rounded-full font-serif px-2 text-gray-50 bg-blue-500 absolute top-5 right-4">Category</p>
                    </div>
                    <div className="mt-5">
                        <Link to={"/"} className="flex items-center justify-start gap-3 mb-3 group">

                            <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                                {/* todo:replce with a image */}
                            </div>
                            <div className='text-sm text-gray-600 font-medium'>
                                <p className='group-hover:underline'>Al Hasan</p>
                                <p className='group-hover:underline'>August 20, 2022</p>
                            </div>
                        </Link>

                        <h3 className="text-xl font-medium">
                            5 Easy Ways You Can Turn Future Into Success.
                        </h3>
                        <p className="primary-text my-3">
                            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,… <Link className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col border p-4 rounded-lg">
                    <div className="relative">
                        <img src="/banner.jpg" className="rounded-t-lg" alt="banner image" />
                        <p className="rounded-full font-serif px-2 text-gray-50 bg-blue-500 absolute top-5 right-4">Category</p>
                    </div>
                    <div className="mt-5">
                        <Link to={"/"} className="flex items-center justify-start gap-3 mb-3 group">

                            <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                                {/* todo:replce with a image */}
                            </div>
                            <div className='text-sm text-gray-600 font-medium'>
                                <p className='group-hover:underline'>Al Hasan</p>
                                <p className='group-hover:underline'>August 20, 2022</p>
                            </div>
                        </Link>

                        <h3 className="text-xl font-medium">
                            5 Easy Ways You Can Turn Future Into Success.
                        </h3>
                        <p className="primary-text my-3">
                            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,… <Link className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col border p-4 rounded-lg">
                    <div className="relative">
                        <img src="/banner.jpg" className="rounded-t-lg" alt="banner image" />
                        <p className="rounded-full font-serif px-2 text-gray-50 bg-blue-500 absolute top-5 right-4">Category</p>
                    </div>
                    <div className="mt-5">
                        <Link to={"/"} className="flex items-center justify-start gap-3 mb-3 group">

                            <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                                {/* todo:replce with a image */}
                            </div>
                            <div className='text-sm text-gray-600 font-medium'>
                                <p className='group-hover:underline'>Al Hasan</p>
                                <p className='group-hover:underline'>August 20, 2022</p>
                            </div>
                        </Link>

                        <h3 className="text-xl font-medium">
                            5 Easy Ways You Can Turn Future Into Success.
                        </h3>
                        <p className="primary-text my-3">
                            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,… <Link className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col border p-4 rounded-lg">
                    <div className="relative">
                        <img src="/banner.jpg" className="rounded-t-lg" alt="banner image" />
                        <p className="rounded-full font-serif px-2 text-gray-50 bg-blue-500 absolute top-5 right-4">Category</p>
                    </div>
                    <div className="mt-5">
                        <Link to={"/"} className="flex items-center justify-start gap-3 mb-3 group">

                            <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                                {/* todo:replce with a image */}
                            </div>
                            <div className='text-sm text-gray-600 font-medium'>
                                <p className='group-hover:underline'>Al Hasan</p>
                                <p className='group-hover:underline'>August 20, 2022</p>
                            </div>
                        </Link>

                        <h3 className="text-xl font-medium">
                            5 Easy Ways You Can Turn Future Into Success.
                        </h3>
                        <p className="primary-text my-3">
                            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,… <Link className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col border p-4 rounded-lg">
                    <div className="relative">
                        <img src="/banner.jpg" className="rounded-t-lg" alt="banner image" />
                        <p className="rounded-full font-serif px-2 text-gray-50 bg-blue-500 absolute top-5 right-4">Category</p>
                    </div>
                    <div className="mt-5">
                        <Link to={"/"} className="flex items-center justify-start gap-3 mb-3 group">

                            <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                                {/* todo:replce with a image */}
                            </div>
                            <div className='text-sm text-gray-600 font-medium'>
                                <p className='group-hover:underline'>Al Hasan</p>
                                <p className='group-hover:underline'>August 20, 2022</p>
                            </div>
                        </Link>

                        <h3 className="text-xl font-medium">
                            5 Easy Ways You Can Turn Future Into Success.
                        </h3>
                        <p className="primary-text my-3">
                            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,… <Link className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;