
const Footer = () => {
    return (
        <footer className="bg-[#040404] py-6 text-gray-300">
            <div className="container mx-auto flex flex-wrap justify-between items-start px-4 py-5 font-medium">
                {/* Column 1 */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <div className="flex items-center mb-7">
                        <h1 className="font-semibold text-3xl h-8 animate-pulse font-serif"><span className="text-blue-600 font-bold">Blog</span>Express</h1>
                    </div>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
                </div>

                {/* Column 2 */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h4 className="mb-3 text-lg">Quick Links</h4>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="hover:text-blue-400 transition duration-300 hover:underline">Home</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition duration-300 hover:underline">About</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition duration-300 hover:underline">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition duration-300 hover:underline">Privacy and policy</a></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="w-full md:w-2/4">
                    <h4 className="mb-3">Subscribe to Our Newsletter</h4>
                    <div className="flex items-center">
                        <input type="email" placeholder="Your email" className="max-w-md bg-gray-100 text-black py-2 px-3 rounded-l-md focus:outline-none" />
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-r-md focus:outline-none">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="mt-4 border-t px-4 border-gray-400 container mx-auto">
                <p className="text-center pt-4 text-[12px] text-gray-400 font-medium">© {new Date().getFullYear()} BlogExpress. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
