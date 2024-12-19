
const PaginationButton = ({ handlePageChange, page, pages, totalPages }) => {
    return (
        <div className="flex justify-center mt-8">
            <nav className="inline-flex space-x-2">
                {/* Previous Button */}
                <button
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                    className="px-4 py-2 border border-gray-200 font-semibold text-neutral-900 rounded-md hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Previous
                </button>

                {/* Page Numbers */}
                {
                pages.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(item + 1)}
                        className={`px-4 py-2 rounded-md ${page === item + 1
                            ? "border border-blue-700 rounded"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                            }`}
                    >
                        {item + 1}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                    className="px-4 py-2 border border-gray-200 font-semibold text-neutral-900 rounded-md hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Next
                </button>
            </nav>
        </div>
    );
};

export default PaginationButton;