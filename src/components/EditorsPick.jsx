import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../provider/AppContext";
import moment from "moment";

const EditorsPick = () => {
    const { editorsPick } = useContext(DataContext)
    return (
        <div>
            <h2 className='text-3xl font-serif font-bold mt-2 mb-6 text-neutral-800'>Editors Pick</h2>
            {
                editorsPick && editorsPick.map(item => <div key={item} className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:items-center p-5 border md:border-0 my-8">
                    <div className="relative h-full w-full">
                        <img src={item?.titleImage} className="h-full w-full" alt="title image" />
                        <p className="absolute top-5 right-5 bg-blue-500 text-white px-1 rounded-full">
                            {item.category}
                        </p>
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-2xl font-medium">
                            {item.title}
                        </h3>
                        <p className="primary-text my-3">
                            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc,… <Link className="text-blue-500 hover:underline hover:text-blue-600">Read More</Link>
                        </p>
                        <Link to={"/"} className="flex items-center justify-start gap-3 mb-3 group">

                            <div className="h-12 w-12 border rounded-full group-hover:border-blue-400 bg-blue-200">
                                <img className="rounded-full" src={item?.author?.profileImage ? item?.author.profileImage : 'https://i.ibb.co.com/zFMrg3c/avatar.png'} alt="author profile" />
                            </div>
                            <div className='text-sm text-gray-600 font-medium'>
                                <p className='group-hover:underline'>{item?.author?.name}</p>
                                <p className='group-hover:underline'>{moment(item?.postAt).format("MMM Do YYYY")}</p>
                            </div>
                        </Link>
                    </div>

                </div>)
            }


        </div>
    );
};

export default EditorsPick;