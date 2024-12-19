import { useContext } from "react";
import { FaEye } from "react-icons/fa6";
import { DataContext } from "../../../provider/AppContext";
import { toast } from "react-toastify";
import { Helmet } from 'react-helmet-async'

const BlogsData = ({ blogs, handleOpenModal }) => {
    const { _id, title, titleImage, author, status, editorsPick } = blogs

    const { 
        updateApproveStatus,
        updateDenyStatus,
        updateEditorsPickStatus,
        refetchBlogs } = useContext(DataContext)


    const handleUpdateApprove = (_id) => {

        updateApproveStatus({ id: _id })
            .then(res => {
                // console.log(res)
                if (res?.modifiedCount === 1) {
                    toast.success('The blog has been successfully approved and is now live.')
                    refetchBlogs()
                }
            })
    }

    const handleUpdateDeny = (_id) => {
        updateDenyStatus({ id: _id })
            .then(res => {
                // console.log(res)
                if (res?.modifiedCount === 1) {
                    toast.success('The blog has been successfully marked as denied.');
                    refetchBlogs()
                }
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
                    toast.success("Success! This blog has been featured as an Editor's Pick.")
                    refetchBlogs()
                }
            })
            .catch(err => {
                console.log(err)
                toast.error('Something Went Wrong')
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
                    toast.success("The blog has been removed from the Editor's Picks list.")
                    refetchBlogs()
                }
            })
            .catch(err => console.log(err))
    }



    return (
        <tr className="w-full text-neutral-600 font-medium border-b">
            <Helmet>
                <title>{title} | Blog Express</title>
            </Helmet>
            <td className="p-2">
                <img className="w-12 h-12" src={titleImage} alt="" />
            </td>
            <td className="p-2">{title?.length > 18 ? title.substr(0, 18) + '...' : title}</td>
            <td className="p-2">
                <div className="flex items-center gap-2">
                    <img className="h-8 w-8 border rounded" src={author?.profileImage} alt="image" />
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

                </select>
            </td>
            <td className="p-2 flex gap-4 items-center justify-center">
                <div className="border text-blue-500 rounded p-1 cursor-pointer">
                    <button className="flex items-center justify-center" onClick={() => handleOpenModal(_id)}>
                        <FaEye size={22} />
                    </button>
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