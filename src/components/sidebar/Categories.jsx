import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="p-5 border mb-12">
            <h2 className='text-2xl font-serif font-bold mt-2 mb-6 text-center text-neutral-800'>Categories</h2>
            <ul>
                <li className="border-t py-3 px-1 font-medium text-neutral-800 flex justify-between items-center">
                    <Link to='/'>hello</Link>
                    <span>(2)</span>
                </li>
                <li className="border-t py-3 px-1 font-medium text-neutral-800 flex justify-between items-center">
                    <Link to='/'>World</Link>
                    <span>(2)</span>
                </li>
                <li className="border-t py-3 px-1 font-medium text-neutral-800 flex justify-between items-center">
                    <Link to='/'>Shuvo</Link>
                    <span>(2)</span>
                </li>
                <li className="border-t py-3 px-1 font-medium text-neutral-800 flex justify-between items-center">
                    <Link to='/'>Nobo</Link>
                    <span>(2)</span>
                </li>
                <li className="border-t py-3 px-1 font-medium text-neutral-800 flex justify-between items-center">
                    <Link to='/'>Borsho</Link>
                    <span>(2)</span>
                </li>
            </ul>
        </div>
    );
};

export default Categories;