import { useState } from "react";
import { useForm } from "react-hook-form"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toolbarOptions } from "../../../utilities/quillEditor";

const AddBlogs = () => {
    const [content, setContent] = useState('');
    const { register, handleSubmit } = useForm()

    const modules = {
        toolbar: toolbarOptions
    }


    const onSubmit = (data) => {
        console.log(data, content)
    }
    //todo: upload image ui
    return (
        <div className="py-5 w-[95%] mx-auto">
            <div>
                <h1 className="my-5 text-center text-3xl font-medium">Add Blog</h1>
            </div>
            <div>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="title"></label>
                    <input className="border p-2 rounded block w-full" name="title" {...register("title")} placeholder="Title" required />

                    <label htmlFor="category"></label>
                    <select className="p-2 w-full border rounded" name="category" {...register("category")}>
                        <option disabled selected hidden>Select a category</option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>

                    <div className="mb-6">
                        <ReactQuill modules={modules} className="h-full " theme="snow" value={content} onChange={setContent} />
                    </div>
                    <input className="mr-2" type="checkbox" id="editors-pick" name="editors-pick" {...register("editors-pick")} />
                    <label htmlFor="editors-pick">Mark As Editors Pick</label>

                    <input className="block bg-blue-500 text-white w-full py-2 rounded font-medium cursor-pointer" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddBlogs;