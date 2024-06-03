import { Link } from "react-router-dom";

const Author = () => {
    return (
        <div className="py-8 px-5">
        <ul className="space-y-1 text-lg md:text-xl font-semibold">
            <li className="border-b">
                <Link className="py-2 hover:bg-gray-50 block">
                    Home
                </Link>
            </li>
            <li className="border-b">
                <Link className="py-2 hover:bg-gray-50 block">
                    Users
                </Link>
            </li>
            <li className="border-b">
                <Link className="py-2 hover:bg-gray-50 block">
                    Blogs
                </Link>
            </li>
            <li className="border-b">
                <Link className="py-2 hover:bg-gray-50 block">
                    Settings
                </Link>
            </li>
            <li className="border-b">
                <Link className="py-2 hover:bg-gray-50 block">
                    Logout
                </Link>
            </li>
        </ul>
    </div>
    );
};

export default Author;