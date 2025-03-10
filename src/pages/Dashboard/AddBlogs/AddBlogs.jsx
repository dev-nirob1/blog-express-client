import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form"
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { DataContext } from "../../../provider/AppContext";
import { AuthContext } from "../../../provider/AuthProvider";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toolbarOptions } from "../../../utilities/modules";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../components/ScrollToTop";

const AddBlogs = () => {
    const { imageUpload, postBlog, role, refetchBlogs } = useContext(DataContext)
    const { user } = useContext(AuthContext)
    const [content, setContent] = useState('');
    const { register, handleSubmit } = useForm()
    const [file, setFile] = useState(null)
    const [imagePreview, setImagePreview] = useState('')
    const quillRef = useRef(null);
    const navigate = useNavigate()
    const onSubmit = async (data) => {

        if (!file && content === '') {
            alert('please fill all the fields')
            return
        }
        if (file) {
            const uploadedImage = await imageUpload(file)
            // console.log(uploadedImage?.data?.url)
            if (uploadedImage?.data) {
                const blogData = {
                    title: data?.title,
                    category: data?.category,
                    content,
                    titleImage: uploadedImage?.data?.url,
                    author: {
                        name: user?.displayName || 'unknown',
                        email: user?.email,
                        profileImage: user?.photoURL || 'https://i.ibb.co.com/zFMrg3c/avatar.png'
                    },
                    views: 0,
                    postAt: new Date(),
                    updateAt: role === 'admin' ? new Date() : null,
                    likesCount: 0,
                    commentsCount: 0,
                    approved: role === 'admin',
                    denied: false,
                    editorsPick: false,
                    status: role === 'admin' ? 'approved' : 'pending'
                }

                postBlog(blogData, {
                    onSuccess: data => {
                        console.log('post response', data)
                        if (data.acknowledged) {
                            toast.success('Blog posted successfully!')
                            navigate('/dashboard/my-blogs')
                            refetchBlogs()
                        }
                    }
                });

            }
        }
    };


    const handleRemoveImage = () => {
        setFile(null);
        setImagePreview('');
    };

    return (
        <div className="py-5 h-full w-[95%] mx-auto">
            <ScrollToTop />
            <Helmet>
                <title>Add Blog | Blog Express</title>
            </Helmet>
            <div>
                <h1 className="my-5 text-center text-3xl font-medium">Add Blog</h1>
            </div>
            <div>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="title"></label>
                    <input className="border p-2 rounded block w-full" name="title" {...register("title")} placeholder="Title" required />

                    <label htmlFor="category"></label>
                    <select className="p-2 w-full border rounded" defaultValue='' name="category" {...register("category")}>
                        <option value='' disabled >Select a category</option>
                        <option value="Technology and Gadgets">Technology and Gadgets</option>
                        <option value="Self-Improvement">Self-Improvement</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Programming and Development">Programming and Development</option>
                        <option value="Book Reviews">Book Reviews</option>
                        <option value="Travel and Adventure">Travel and Adventure</option>
                    </select>

                    <label className="border p-2 mx-auto rounded flex flex-col items-center justify-center cursor-pointer group overflow-hidden" htmlFor="upload-image">
                        {
                            file?.name ?

                                <div className="md:flex gap-10 items-center justify-center">

                                    <div className="relative">
                                        <img className="w-40 h-32 mx-auto" src={imagePreview} alt={file?.name} />
                                        <div onClick={handleRemoveImage} className="absolute top-0 right-0 text-white cursor-pointer group-hover:bg-black">
                                            <FaXmark size={25} />
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <h5 className="whitespace-nowrap text-lg font-medium tracking-tight">{file?.name.slice(0, 50) + '...'}</h5>
                                        <p className="text-gray-500">{(file?.size / 1024).toFixed(1)} KB</p>
                                    </div>
                                </div>

                                : <>
                                    <FaCloudUploadAlt size={50} />
                                    <h5 className="whitespace-nowrap text-lg font-medium tracking-tight">Upload your file</h5>
                                    <p className="text-sm text-gray-500">File Should be in PNG, JPEG or JPG formate</p>
                                </>
                        }
                    </label>

                    <input onChange={(e) => {
                        const selectedFile = e.target.files[0]
                        // console.log(e.target.files[0])
                        const preview = URL.createObjectURL(selectedFile)
                        setFile(selectedFile)
                        setImagePreview(preview)
                    }} className="hidden" id="upload-image" type="file" accept="image/jpg, image/jpeg, image/png, image/webp" />


                    <div className="mb-6">
                        <ReactQuill
                            theme="snow"
                            modules={toolbarOptions}
                            value={content}
                            onChange={setContent}
                            ref={quillRef}
                            placeholder="Write Here..."
                        />
                    </div>

                    <button className="block bg-blue-500 text-white w-full py-2 rounded font-medium cursor-pointer" type="submit">Post</button>
                </form>
            </div>
        </div>
    );
};
export default AddBlogs;