import { useContext, useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../../../provider/AppContext";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toolbarOptions } from "../../../utilities/modules";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../components/ScrollToTop";

const Update = () => {
    const { updateBlog } = useContext(DataContext);
    const [content, setContent] = useState('');
    const { register, handleSubmit, setValue } = useForm();
    const quillRef = useRef(null);
    const navigate = useNavigate();
    const blog = useLoaderData();

    useEffect(() => {
        setValue("title", blog.title);
        setValue("category", blog.category);
        setContent(blog.content);
    }, [blog, setValue]);

    const onSubmit = async (data) => {
        const updatedBlogData = {
            ...data,
            content,
        };

        updateBlog({ id: blog._id, updatedBlogData }, {
            onSuccess: (response) => {
                console.log('Post response', response);
                if (response.acknowledged) {
                    toast.success('Blog Updated successfully!');
                    navigate('/dashboard/my-blogs');
                }
            }
        });
    };
    return (
        <div className="py-5 h-full w-[95%] mx-auto">
            <ScrollToTop/>
            <Helmet>
                <title>Update Blogs | Blog Express</title>
            </Helmet>
            <div>
                <h1 className="my-5 text-center text-3xl font-medium">Update Blog</h1>
            </div>
            <div>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="title">Title</label>
                    <input
                        className="border p-2 rounded block w-full"
                        name="title"
                        {...register("title")}
                        placeholder="Title"
                        required
                    />

                    <label htmlFor="category">Category</label>
                    <select
                        className="p-2 w-full border rounded"
                        {...register("category")}
                    >
                        <option value='' disabled>Select a category</option>
                        <option value="Technology and Gadgets">Technology and Gadgets</option>
                        <option value="Self-Improvement">Self-Improvement</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Programming and Development">Programming and Development</option>
                        <option value="Book Reviews">Book Reviews</option>
                        <option value="Travel and Adventure">Travel and Adventure</option>
                    </select>

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

                    <button className="block bg-blue-500 text-white w-full py-2 rounded font-medium cursor-pointer" type="submit">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Update;
