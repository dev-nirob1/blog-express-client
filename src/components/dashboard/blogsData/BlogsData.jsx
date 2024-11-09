import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogsData = ({ blogs, index }) => {
    const { _id, title, author, denied, approved } = blogs
    console.log(blogs)
    return (
        <tr className="w-full text-neutral-600 font-medium border-b">
            <td className="p-2">{index + 1}</td>
            <td className="p-2">{title?.length > 18 ? title.substr(0, 18) + '...' : title}</td>
            <td className="p-2">
                <div>
                    <img src={author.profileImage} alt="image" />
                    <small>{author?.name}</small>
                </div>
            </td>
            <td className="p-2">
                {approved && <span className="border border-green-500 px-5 py-2 rounded bg-green-600 text-white cursor-pointer">Approved</span> }
                {denied && <span className="border border-red-500 px-5 py-2 rounded bg-red-500 text-white cursor-pointer">Denied</span>}
                {!approved && !denied && <span className="border border-orange-400 px-5 py-2 rounded bg-orange-400 cursor-pointer">Pending</span>}
            </td>
            <td className="p-2 flex gap-4 items-center justify-center">
                <div className="border rounded p-1 cursor-pointer">
                    <Link to={`/blog/${_id}`}><FaEye size={25} /></Link>
                </div>
                <select className="border rounded p-1 cursor-pointer" name="role" id="role">
                    {!approved && <option className="cursor-pointer" value="user">Approve</option>}
                    {!denied && <option className="cursor-pointer" value="author">Deny</option>}
                    {/* <option className="cursor-pointer" value="admin">Delete</option> */}
                </select>
                <div className="flex flex-col">
                    <label>
                        <input
                        className="mr-1"
                            type="radio"
                            name={`editorPick-${blogs._id}`}
                            value="yes"
                        // onChange={handleRadioChange} 
                        />
                        Picked as Editor
                    </label>
                    <label>
                        <input
                        className="mr-1"
                            type="radio"
                            name={`editorPick-${blogs._id}`}
                            value="no"
                        // onChange={handleRadioChange} 
                        />
                        Not Picked
                    </label>
                </div>

            </td>
        </tr>
    );
};

export default BlogsData;