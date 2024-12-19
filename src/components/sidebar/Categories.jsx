import { Link } from "react-router-dom";

const Categories = () => {
    const categories = [
        'Technology and Gadgets',
        'Self-Improvement',
        'Entertainment',
        'Programming and Development',
        'Book Reviews',
        'Travel and Adventure'
    ]
    return (
        <div className="p-5 border mb-12">
            <h2 className='text-2xl font-serif font-bold mt-2 mb-6 text-center text-neutral-800'>Categories</h2>
            {categories.map((item, i) => <ul key={i}>
                <li className="border-t py-3 px-1 font-medium text-neutral-800 flex justify-between items-center ">
                    <Link className="hover:text-blue-500 hover:underline" to={`/blogs/${item}`}>{item}</Link>
                    {/* <span>(2)</span> */}
                </li>
              
            </ul>)}
        </div>
    );
};

export default Categories;