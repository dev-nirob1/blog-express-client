import { useContext } from "react";
import { DataContext } from "../../provider/AppContext";
import { toast } from "react-toastify";

const UpdateProfile = ({ setTab }) => {
    const { updateUsersInfo } = useContext(DataContext)

    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const contactNumber = form.tel.value;
        const address = form.location.value;
        const bio = form.bio.value;
        const dob = form.date.value
        const updatedInfo = {
            name,
            address,
            phone: contactNumber,
            dob,
            bio
        }
        const res = await updateUsersInfo(updatedInfo);
        console.log(res);
        if (res.data.modifiedCount === 1) {
            toast.success('Profile Updated')
            setTab('profile')
        }

    }
    return (
        <>
            <div className="w-full my-4 rounded-lg shadow-lg">
                <p className="font-medium text-lg text-center mb-3">Update Your Profile Info</p>
                <form onSubmit={handleUpdateProfile} className="w-10/12 mx-auto space-y-3 pb-5">
                    <input className="border rounded p-2 w-full" name="name" type="text" placeholder="Name" />

                    {/* <input className="border rounded p-2 w-full" type="E-mail" placeholder="Example@gmail.com" /> */}

                    <input className="border rounded p-2 w-full" name="tel" type="tel" placeholder="Contact Number" />

                    <input className="border rounded p-2 w-full" name="location" type="text" placeholder="Location" />

                    <input className="border rounded p-2 w-full" type="date" name="date" id="" />

                    <textarea className="border rounded p-2 w-full" name="bio" cols="30" rows="2" placeholder="Bio"></textarea>
                    <button
                        className="w-full px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium"
                        type="submit">
                        Update Profile
                    </button>
                </form>
            </div>
            <div className="text-center w-full">
                <button
                    className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium"
                    onClick={() => setTab('profile')}
                >
                    See Profile
                </button>
            </div>
        </>
    );
};

export default UpdateProfile;