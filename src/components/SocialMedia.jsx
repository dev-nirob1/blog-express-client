import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6"
const SocialMedia = () => {
    return (
        <div className='border p-5'>
            <h2 className='text-2xl font-serif font-bold mt-2 mb-6 text-center text-neutral-800'>Stay Connected</h2>
            <div className='text-gray-100 space-y-3'>
                <div className='flex items-center h-12 bg-[#0866FF] cursor-pointer'>
                    <div className='p-3'>
                        <FaFacebookF size="22" />
                    </div>
                    <p className='p-3 border-l border-gray-200'>
                        Like
                    </p>
                </div>
                <div className='flex items-center h-12 bg-[#ff0000e7] cursor-pointer'>
                    <div className='p-3 '>
                        <FaYoutube size="22" />
                    </div>
                    <p className='p-3 border-l border-gray-200'>
                        Subscribe
                    </p>
                </div>
                <div className='flex items-center h-12 bg-[#0A66C2] cursor-pointer'>
                    <div className='p-3'>
                        <FaLinkedinIn size="22" />
                    </div>
                    <p className='p-3 border-l border-gray-200'>
                        Connect
                    </p>
                </div>
                <div className='flex items-center h-12 bg-[#000000] cursor-pointer'>
                    <div className='p-3'>
                        <FaXTwitter size="22" />
                    </div>
                    <p className='p-3 border-l border-gray-200'>
                        Follow
                    </p>
                </div>
                <div className='flex items-center h-12 bg-[#FC114C] cursor-pointer'>
                    <div className='p-3'>
                        <FaInstagram size="22" />
                    </div>
                    <p className='p-3 border-l border-gray-200'>
                        Follow
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;