import { FaInstagram, FaLinkedin, FaSquareFacebook, FaSquareXTwitter, FaUser } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import moment from 'moment-timezone';

const TopNavbar = () => {
  const formattedDate = moment().format('ddd, DD-MM-YY');
  const formattedTime = moment().format('hh:mm A');

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
                <span className="hover:text-blue-600 cursor-pointer"><FaUser size={20} /></span>
            </div>
        </div>
    );
};

export default TopNavbar;