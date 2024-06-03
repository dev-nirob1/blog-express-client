import { FaInstagram, FaLinkedin, FaSquareFacebook, FaSquareXTwitter, FaUser } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import moment from 'moment-timezone';
import { Link } from "react-router-dom";
import { useState } from "react";

const TopNavbar = () => {
    const formattedDate = moment().format('ddd, DD-MM-YY');
    const formattedTime = moment().format('hh:mm A');

    const [open, setOpen] = useState(false)

    return (
        <div className="container mx-auto flex items-center justify-between py-5 px-2 w-[100vw]">

            <ul className="hidden md:flex justify-start items-center gap-4">
                <li className="hover:text-blue-600 cursor-pointer">
                    <FaSquareFacebook size={20} />
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                    <FaInstagram size={20} />
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                    <FaSquareXTwitter size={20} />
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                    <FaLinkedin size={20} />
                </li>
                <li className="hover:text-blue-600 cursor-pointer">
                    <FaGithubSquare size={20} />
                </li>
            </ul>
            <div>
                <h1 className="text-4xl font-serif font-semibold cursor-pointer"><span className="text-blue-600 font-extrabold">Blog</span>Express</h1>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex flex-col items-center">
                    <p>{formattedTime}</p>
                    <p> {formattedDate}</p>
                </div>
                <div className="relative">
                    <button onClick={() => setOpen(!open)} className="border rounded-full p-2 hover:text-blue-600">
                        <FaUser className="" size={20} />
                    </button>

                    <ul className={`${open ? 'absolute right-0 top-12' : 'hidden'} z-10 bg-white w-40 shadow-inner rounded-xl font-medium text-neutral-700`}>
                        <li className="border-b px-4 py-2">
                            <Link to={'/profile'} className="w-full block">Profile</Link>
                        </li>
                        <li className="border-b px-4 py-2">
                            <Link to={'/dashboard'} className="w-full block">DashBoard</Link>
                        </li>
                        <li className="px-4 py-2">
                            <button className="w-full text-left block">LogOut</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;