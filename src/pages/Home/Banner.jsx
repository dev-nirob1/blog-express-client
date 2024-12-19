import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import data from "../../utilities/data";

const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const navigate = useNavigate();

    const fetchCategories = async (searchInput) => {
        if (!searchInput === '') return [];
        return data.filter((category) =>
            category.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    };

    const { data: categories = [], refetch } = useQuery({
        queryKey: ["categories"],
        queryFn: () => fetchCategories(searchInput),
        enabled: false,
    });

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchInput(query);

        if (query !== '') {
            refetch(); 
        }
    };

    const handleSuggestionClick = (categoryName) => {
        navigate(`/blogs/${categoryName}`);
    };

    return (
        <section className="h-[70vh] w-full relative">
            <div className="relative h-[80vh] text-[rgba(0, 0, 55, 0.5)]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 55, 0.1), rgba(0, 0, 15, 0.1)), url('/banner.jpg')",
                    }}
                >
                    <div className="flex items-center justify-center h-full">
                        <div className="w-[480px] flex flex-col items-center px-5 md:px-0 relative">
                            <div className="w-full flex">
                                <input
                                    type="text"
                                    className="px-5 py-3 rounded-l-md outline-none w-full"
                                    placeholder="Search By Category..."
                                    value={searchInput}
                                    onChange={handleSearchChange}
                                />
                                <button className="px-10 py-3 rounded-r-md bg-[#040404] font-medium text-gray-200 hover:bg-neutral-900">
                                    Search
                                </button>
                            </div>
                            {/* Suggestions */}
                            {searchInput.trim() && (
                                <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md z-10">
                                    {categories.length > 0 ? (
                                        <ul>
                                            {categories.map((category) => (
                                                <li
                                                    key={category.id}
                                                    className="px-5 py-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
                                                    onClick={() => handleSuggestionClick(category.name)}
                                                >
                                                    <img src={category.icon} alt={category.name} className="w-6 h-6" />
                                                    {category.name}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="px-5 py-3">No categories found.</div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
