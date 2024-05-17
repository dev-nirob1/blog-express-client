import { FaQuoteLeft } from "react-icons/fa6";

const Quote = () => {
    return (
        <section className="quote bg-gray-200 p-5 md:p-10 rounded-lg shadow-lg text-center">
            <h3 className="text-gray-700 py-5 flex justify-center"><FaQuoteLeft size={50} /></h3>
            <blockquote className="text-lg italic text-gray-800">
                &quot;The beauty of learning is that it never stops. At <span className="text-blue-600">Blog</span>Express, we believe in the power of knowledge to transform lives and communities. Together, let&apos;s embark on a journey of discovery and growth.&quot;
            </blockquote>
        </section>
    );
};

export default Quote;