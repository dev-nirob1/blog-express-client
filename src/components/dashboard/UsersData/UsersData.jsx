import { useContext } from "react";
import { DataContext } from "../../../provider/AppContext";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "react-toastify";

const UsersData = ({ userData, index }) => {
    const { profileImage, name, email, role } = userData;
    const { updateUserRole, deleteUser } = useContext(DataContext)
    const { user } = useContext(AuthContext)

    const handleUserRoleChange = async (e) => {
        const role = e.target.value;
        const res = await updateUserRole({ email, role })
        
        if (res?.modifiedCount === 1) {
            toast.success('Role Updated')
        }
    }


    const handleDeleteUser = async (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await deleteUser(email);
                if (response.data.deletedCount > 0) {
                    Swal.fire("Deleted!", "The user has been deleted.");
                }
            }
        });
    };

    return (
        <tr className="w-full text-neutral-600 font-medium border-b hover:bg-slate-50">
            <td className="p-2">{index + 1}</td>
            <td className="p-2">
                <img className="rounded-full w-8 h-8 border" src={profileImage} alt="" />
            </td>
            <td className="p-2">{name}</td>
            <td className="p-2">{email}</td>
            <td className="p-2">
                <label htmlFor="role"></label>

                <select className="border rounded p-1 cursor-pointer" onChange={handleUserRoleChange} defaultValue={role} name="role" id="role">
                    <option value="user">User</option>
                    <option value="author">Author</option>
                    <option value="admin">Admin</option>
                </select>
            </td>

            <td className="p-2">
                <button
                    onClick={() => handleDeleteUser(email)}
                    title="Delete User"
                    disabled={role === 'admin' && user?.email === email}
                    className={`text-red-600 p-1 border rounded-md border-red-600 hover:text-white hover:bg-red-600 ${role === 'admin' && user?.email === email ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <RiDeleteBin6Fill size={20} />
                </button>
            </td>
        </tr>
    );
};

export default UsersData;