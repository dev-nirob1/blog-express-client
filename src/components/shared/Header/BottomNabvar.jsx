import { Link } from 'react-router-dom'

const BottomNabvar = () => {
   

    return (
        <div className='bg-[#040404] py-5 text-gray-200'>

            <div className="container mx-auto">
                <ul className="flex items-center justify-center gap-5">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to='/blogs'>Blogs</Link>
                    </li>
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