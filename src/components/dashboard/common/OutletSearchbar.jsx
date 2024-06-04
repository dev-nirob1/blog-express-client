import { FaMagnifyingGlass } from "react-icons/fa6";

const OutletSearchbar = ({routeName, length}) => {
    return (
        <div className="flex justify-between ietms-center mb-6 md:mb-8 w-full">
                <h3 className="text-lg md:text-2xl font-medium">{routeName}: {length}</h3>
                <div className="flex gap-2 items-center">
                    <input type="search" className="border focus:outline-none rounded p-1 w-40 md:max-w-xl" placeholder="Search by name" />
                    <button className="px-3 py-[6px] rounded bg-blue-500 text-white">
                        <FaMagnifyingGlass size={20} />
                    </button>
                </div>
            </div>
    );
};

export default OutletSearchbar;