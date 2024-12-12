import { useContext } from "react";
import Card from "./Card";
import { DataContext } from "../../provider/AppContext";

const EditorsPick = () => {
    const { editorsPick } = useContext(DataContext)

    return (
        <div>
            <h2 className='text-3xl font-serif font-bold mt-2 mb-6 text-neutral-800'>Editors Pick</h2>
            { }
            {
                editorsPick && editorsPick.map(item => <Card key={item._id} item={item} />)
            }


        </div>
    );
};

export default EditorsPick;