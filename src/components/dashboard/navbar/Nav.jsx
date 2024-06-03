import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="px-4 shadow border flex items-center justify-between h-16">
            <div className="">
                <Link to='/'>
                    <h1 className="text-4xl font-serif font-semibold cursor-pointer"><span className="text-blue-600 font-extrabold">Blog</span>Express</h1>
                </Link>
            </div>
            <div>

                <div className="relative">
                    <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                        <img alt="Tailwind CSS Navbar component" className="w-10 h-10 rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    <ul tabIndex={0} className={`mt-3 z-[1] shadow bg-white rounded-box w-52 ${open ? 'absolute top-8 right-0' : 'hidden'} py-2 rounded-b-lg`}>
                        <li>
                            <Link to='/profile' className="block hover:bg-gray-50 p-2 border-b">
                                Profile
                            </Link>
                        </li>
                        <li><button className="block hover:bg-gray-50 w-full text-left p-2">Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nav;