import { FaEye, FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Data = ({ blog, index, handleDelete, handleOpenModal }) => {

    const {
        _id,
        title,
        titleImage,
        status,
    } = blog;

    return (
        <tr className="border-b">
            <td className="py-4">{index + 1}</td>
            <td>
                <img
                    src={titleImage}
                    alt={title}
                    className="w-10 h-10 object-cover rounded"
                />
            </td>
            <td>{title}</td>
            <td>
                {status === "pending" && (
                    <span className="py-1 px-3 rounded font-medium bg-yellow-500 text-white">
                        Pending
                    </span>
                )}
                {status === "approved" && (
                    <span className="py-1 px-3 rounded font-medium bg-green-500 text-gray-100">
                        Published
                    </span>
                )}
                {status === "denied" && (
                    <span className="py-1 px-3 rounded font-medium bg-red-500 text-white">
                        Denied
                    </span>
                )}
            </td>
            <td className=" py-2 flex items-center gap-3">
                <button onClick={() => handleOpenModal(_id)} className="border p-1 rounded text-blue-500">
                    <FaEye size={21} />
                </button>
                <Link to={`/dashboard/update-blog/${_id}`} className="border p-1 rounded text-green-500">
                    <FaEdit size={21} />
                </Link>
                <button onClick={() => handleDelete(_id)} className="border p-1 rounded text-red-500">
                    <FaTrash size={21} />
                </button>
            </td>

        </tr>
    );
};

export default Data;
