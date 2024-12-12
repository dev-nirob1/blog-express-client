import { FaInstagram, FaLinkedin, FaSquareFacebook, FaSquareXTwitter, FaUser } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import moment from "moment";
import { DataContext } from "../../../provider/AppContext";
import Modal from "../../Modal/Modal";
import ProfileCard from "../../Profile/ProfileCard";

const TopNavbar = () => {
    const { user, loading, logOut } = useContext(AuthContext)
    const { openModal, isModalOpen, closeModal, role } = useContext(DataContext)

    const formattedDate = moment().format('ddd DD-MM-YY');
    const formattedTime = moment().format('hh:mm A');

    const [open, setOpen] = useState(false)

    const handleLogout = () => {
        logOut()
            .then()
            .catch(err => console.log(err))
    }

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
                <div className="hidden md:flex flex-col items-center">
                    <p>{formattedDate}</p>
                    <p>{formattedTime}</p>
                </div>
                <div className="relative">
                    {
                        loading ?
                            <div className="border-2 border-black h-8 w-8 animate-spin"></div>
                            : <div>
                                {
                                    user ?
                                        <div className="flex items-center justify-center cursor-pointer" onClick={() => setOpen(!open)}>
                                            <img className="h-12 w-12 border rounded-full" src={user?.photoURL} alt="profile image" title={user?.dispalyName} />
                                        </div>
                                        :
                                        <div className="border flex items-center rounded-full">
                                            <Link to="/login" className="p-2 hover:text-blue-600">
                                                <FaUser size={20} />
                                            </Link>
                                        </div>
                                }
                            </div>
                    }

                    {
                        user &&
                        <ul className={`${open ? 'absolute right-0 top-12' : 'hidden'} z-10 bg-white w-40 shadow-inner rounded-xl font-medium text-neutral-700`}>
                            <li className="border-b px-4 py-2 cursor-pointer">
                                <span onClick={openModal} className="w-full block">Profile</span>
                            </li>
                            {
                                (role === 'admin' || role === 'author') && (
                                    <li className="border-b px-4 py-2">
                                        <Link to={`/dashboard/${role}`} className="w-full block">DashBoard</Link>
                                    </li>
                                )
                            }
                            <li onClick={handleLogout} className="px-4 py-2">
                                <button className="w-full text-left block">LogOut</button>
                            </li>
                        </ul>
                    }

                </div>
            </div>
            <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
                <ProfileCard />
            </Modal>
        </div>
    );
};

export default TopNavbar;