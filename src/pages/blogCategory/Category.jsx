import { Link } from 'react-router-dom';
import data from './../../utilities/data'
const Category = () => {

    return (
        <div className="lg:container mx-auto w-full sticky">
             <div className="flex gap-10 items-center lg:justify-center whitespace-nowrap overflow-x-auto px-5 py-5 bg-blue-400">
            {
                data.map(item =>
                    <div key={item.id}>
                        <img className='w-9 md:w-12 mx-auto' src={item.icon} alt="icon" />
                        <Link className='text-white' to={`/blogs/${item.name}`}>{item.name}</Link>
                    </div>)
            }
            </div>
        </div>
    );
};

export default Category;