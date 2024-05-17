import { FaEnvelope, FaFax, FaLocationDot } from 'react-icons/fa6'
import { TbPhoneCall } from "react-icons/tb";

const Contact = () => {

    return (
        <section className="container mx-auto pb-16 pt-8 px-2 md:px-0">
            <h1 className="text-3xl font-semibold text-neutral-900 font-serif text-center my-10">Send Message</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
                {/* contact form */}
                <form>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Your Name" className="px-4 py-2 border rounded-md" />
                        <input type="email" className="px-4 py-2 border rounded-md" placeholder="Your Email" />
                    </div>
                    <input type="text" className="px-4 py-2 border rounded-md mt-6 w-full" placeholder="Subject" />
                    <textarea rows={4} className="px-4 py-2 rounded-md mt-6 w-full border" placeholder="Your Message..."></textarea>
                    <button className="w-full px-5 py-3 rounded-md mt-6 bg-[#040404] text-gray-200">Send Message</button>
                </form>

                {/* contact info */}
                <div className='space-y-5 p-5 font-medium text-gray-600'>
                    <div className="flex items-center space-x-3">
                        <FaLocationDot className='text-blue-500' size={25} />
                        <p>123 Blog Street, Blogtown, BL 12345</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaEnvelope className='text-blue-500' size={25} />
                        <p>contact@blogwebsite.com</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <TbPhoneCall className='text-blue-500' size={25} />
                        <p>(123) 456-7890</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <FaFax className='text-blue-500' size={25} />
                        <p>(123) 456-7891</p>
                    </div>
                    <p>
                        Thank you for visiting our blog! If you have any questions, comments, or feedback, feel free to reach out to us through any of the contact methods listed above. We&apos;re always happy to hear from our readers and will do our best to respond promptly. You can also follow us on social media for the latest updates and content.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact; 