import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Banner = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <section className="h-[70vh] w-full relative">
            <div className="relative h-[70vh] bg-blue-500 text-[rgba(0, 0, 55, 0.5)]">
                <div className="absolute inset-0 bg-cover bg-center" style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 55, 0.5), rgba(0, 0, 15, 0.5))," +
                        "url('/banner.jpg')"
                }}>
                    <div className="flex items-center justify-center h-full">
                        <div className="w-[480px] flex items-center px-5 md:px-0">
                            <input type="text" className="px-5 py-3 rounded-l-full outline-none w-full" placeholder="Enter the keyword..." />
                            <button className="px-9 py-3 rounded-r-full bg-[#040404] font-medium text-gray-200 hover:bg-neutral-900">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;