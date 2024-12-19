import { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            toast.success(`Thank you for subscribing, ${email}!`);
            setEmail("");
        } else {
            toast.error("Please enter a valid email address.");
        }
    };

    return (
    <div className="border p-5">
        <div className="p-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-md text-white">
            <h2 className="text-lg font-bold mb-3 text-center">Subscribe to Our Newsletter</h2>
            <p className="text-sm xl:text-base mb-4 text-center">
                Stay updated with our latest blogs, news, and offers. Enter your email below to subscribe!
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="p-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button
                    type="submit"
                    className="w-full bg-white text-purple-700 font-semibold py-2 rounded-lg hover:bg-purple-50 transition duration-300"
                >
                    Subscribe
                </button>
            </form>
            <p className="text-xs mt-3 text-center">
                By subscribing, you agree to receive our promotional emails. Unsubscribe anytime.
            </p>
        </div>
    </div>
    );
};

export default Newsletter;
