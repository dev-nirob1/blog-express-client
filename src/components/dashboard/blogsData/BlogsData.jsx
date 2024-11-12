import { useContext } from "react";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { DataContext } from "../../../provider/AppContext";

const BlogsData = ({ blogs, index }) => {
    const { _id, title, author, status, editorsPick } = blogs
    // console.log(blogs)
    const { updateApproveStatus, updateDenyStatus, updateEditorsPickStatus, refetchBlogs } = useContext(DataContext)

    const handleUpdateApprove = (blogId) => {

        updateApproveStatus({ id: blogId })
            .then(res => {
                console.log(res)
                if (res?.modifiedCount === 1) {
                    alert('The blog has been successfully approved and is now live.')
                    refetchBlogs()
                }
            })
            .catch(err => {
                console.log(err);
                alert('An error occurred while approving the blog. Please try again.');
            });
    }

    const handleUpdateDeny = (blogId) => {
        updateDenyStatus({ id: blogId })
            .then(res => {
                // console.log(res)
                if (res?.modifiedCount === 1) {
                    alert('The blog has been successfully marked as denied.');
                    refetchBlogs()
                }
            })
            .catch(err => {
                console.log(err)
                alert('An error occurred while denying the blog. Please try again.');
            })
    }

    const handleAddEditorsPick = (id) => {
        const status = {
            editorsPick: true,
            id: id
        }
        updateEditorsPickStatus(status)
            .then(res => {
                if (res?.modifiedCount === 1) {
                    alert("Success! This blog has been featured as an Editor's Pick.")
                    refetchBlogs()
                }
            })
            .catch(err => {
                console.log(err)
                alert('Something Went Wrong')
            })
    }

    const handleRemoveEditorsPick = (id) => {
        const status = {
            editorsPick: false,
            id: id
        }
        updateEditorsPickStatus(status)
            .then(res => {
                if (res?.modifiedCount === 1) {
                    alert("The blog has been removed from the Editor's Picks list.")
                    refetchBlogs()
                }
            })
            .catch(err => console.log(err))
    }

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

                <select
                    className="border rounded p-1 cursor-pointer "
                    defaultValue={status}
                    onChange={e => {
                        if (e.target.value === 'approve') {
                            handleUpdateApprove(_id)
                        }
                        else if (e.target.value === 'deny') {
                            handleUpdateDeny(_id)
                        }
                    }}
                >
                    <option value={status}>
                        {status}
                    </option>

                    <option className=" bg-green-500 text-white hover:bg-green-600" value="approve">Approve</option>

                    <option className="bg-red-500 text-white cursor-pointer" value="deny">Deny</option>

                    {/* <option className="cursor-pointer" value="admin">Delete</option> */}
                </select>
            </td>
            <td className="p-2 flex gap-4 items-center justify-center">
                <div className="border rounded p-1 cursor-pointer">
                    <Link to={`/blog/${_id}`}><FaEye size={25} /></Link>
                </div>

                <div className="flex flex-col">
                    <label>
                        <input
                            className="mr-1"
                            type="radio"
                            checked={editorsPick === true}
                            value="yes"
                            onChange={() => handleAddEditorsPick(_id)}
                        />
                        Picked as Editor
                    </label>
                    <label>
                        <input
                            className="mr-1"
                            type="radio"
                            value='No'
                            checked={editorsPick === false}
                            onChange={() => handleRemoveEditorsPick(_id)}
                        />
                        Not Picked
                    </label>
                </div>

            </td>
        </tr >
    );
};

export default BlogsData;