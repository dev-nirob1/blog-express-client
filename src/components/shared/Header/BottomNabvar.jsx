import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom'

const BottomNabvar = () => {
    const [open, setOpen] = useState(false)

    const handletoggle = () => {
        setOpen(!open)
    }

    return (
        <div className='bg-[#040404] py-5 text-gray-200'>

            <div className="container mx-auto">
                <ul className="flex items-center justify-center gap-5">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <div onClick={handletoggle} className='flex items-center gap-1 cursor-pointer relative'>
                        <span>Categories</span>
                        {open ? <FaAngleUp /> : <FaAngleDown />}
                        <ul className={`${!open ? 'hidden' : 'absolute'} top-11 left-0 bg-[#040404] w-48 rounded-b-lg shadow-lg z-10`}>
                            <li className='border-b border-gray-800'>
                                <Link className='block py-2 px-4 hover:bg-gray-900' to="#">category1</Link>
                            </li>
                            <li className='border-b border-gray-800'>
                                <Link className='block py-2 px-4 hover:bg-gray-900' to="#">category2</Link>
                            </li>
                            <li className='border-b border-gray-800'>
                                <Link className='block py-2 px-4 hover:bg-gray-900' to="#">category3</Link>
                            </li>
                            <li>
                                <Link className='block py-2 px-4 hover:bg-gray-900 hover:rounded-b-lg' to="#">category4</Link>
                            </li>
                        </ul>
                    </div>
                    <li>
                        <Link to='/about-us'>About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact-us'>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BottomNabvar;