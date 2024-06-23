
const AuthorInfo = () => {
    const data = [
        {
            date: "January 11, 2024",
            title: "Ganderbal Press Association visits fire victim of Gund",
            category: "World",
            imgSrc: "https://via.placeholder.com/150"
        },
        {
            date: "January 11, 2024",
            title: "Mehbooba Mufti Escapes Unhurt In Car Accident In south Kashmir",
            category: "Latest",
            imgSrc: "https://via.placeholder.com/150"
        },
        {
            date: "January 11, 2024",
            title: "Mehbooba Mufti Escapes Unhurt In Car Accident In south Kashmir",
            category: "Kashmir",
            imgSrc: "https://via.placeholder.com/150"
        },
        {
            date: "January 9, 2024",
            title: "Mehbooba Mufti Escapes Unhurt In Car Accident In south Kashmir",
            category: "Kashmir",
            imgSrc: "https://via.placeholder.com/150"
        }
    ]
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="border-b pb-4 mb-4">
                <div className="flex items-center space-x-4">
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Profile"
                        className="w-24 h-24 rounded-full"
                    />
                    <div>
                        <h1 className="text-2xl font-bold">Name</h1>
                        <p className="text-gray-600">
                            This is <span className="text-red-500">Name</span> 6 years of experience in the field of journalism, <span className="text-red-500">Name</span> heads the editorial operations of the JK News Live as a Journalist.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.map((entry, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden">
                        <img src={entry.imgSrc} alt={entry.title} className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500">{entry.date}</p>
                            <h2 className="text-lg font-semibold">{entry.title}</h2>
                            <p className="mt-2 text-sm text-gray-600">{entry.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AuthorInfo;