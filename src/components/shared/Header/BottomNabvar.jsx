import { NavLink } from 'react-router-dom'

const BottomNabvar = () => {

    return (
        <div className='bg-[#040404] py-5 text-gray-200'>

            <div className="container mx-auto">
                <ul className="flex items-center justify-center gap-1">
                    <li>
                        <NavLink className={({isActive})=> `${isActive && 'text-blue-500'} text-base md:text-lg font-medium hover:bg-slate-800 px-3 py-1 rounded`} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> `${isActive && 'text-blue-500'} text-base md:text-lg font-medium hover:bg-slate-800 px-3 py-1 rounded`} to='/blogs'>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> `${isActive && 'text-blue-500'} text-base md:text-lg font-medium hover:bg-slate-800 px-3 py-1 rounded`} to='/about-us'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive})=> `${isActive && 'text-blue-500'} text-base md:text-lg font-medium hover:bg-slate-800 px-3 py-1 rounded`} to='/contact-us'>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BottomNabvar;