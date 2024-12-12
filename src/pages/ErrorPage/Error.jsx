import { Helmet } from "react-helmet-async";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen w-full flex items-center 
        justify-center">
            <Helmet>
                            <title>Error | Blog Express</title>
                        </Helmet>
            <div className="text-center space-y-6">
                <h1 className="text-neutral-800 text-4xl font-bold font-serif">Page Not Found</h1>
                <div className="text-center flex flex-col items-center">
                    <p className="font-medium text-neutral-700">Opps the page you are looking for does not found.</p>
                    <Link to="/" className="mt-3 px-5 py-2 bg-[#040404] rounded flex items-center justify-center gap-3 text-gray-100 font-medium"> <FaHome></FaHome> Return Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;