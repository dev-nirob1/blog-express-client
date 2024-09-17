import { useContext } from "react";
import { DataContext } from "../../../provider/AppContext";
import { RiDeleteBin6Fill } from "react-icons/ri";

const UsersData = ({ userData, index }) => {
    const { profileImage, name, email, role } = userData;
    const { updateUserRole, deleteUser } = useContext(DataContext)

    const handleUserRoleChange = (e) => {
        const role = e.target.value;
        updateUserRole({ email, role })
    }

    const handleDeleteUser = (email) => {
        console.log(email)
        deleteUser(email)
    }
    return (
        <tr className="w-full text-neutral-600 font-medium">
            <td className="p-2">{index + 1}</td>
            <td className="p-2">
                <img className="rounded-full w-8 h-8 border" src={profileImage} alt="" />
            </td>
            <td className="p-2">{name}</td>
            <td className="p-2">{email}</td>
            <td className="p-2">
                <label htmlFor="role"></label>

                <select onChange={handleUserRoleChange} defaultValue={role} name="role" id="role">
                    <option value="user">User</option>
                    <option value="author">Author</option>
                    <option value="admin">Admin</option>
                </select>
            </td>

            <td className="p-2">
                <button onClick={() => handleDeleteUser(email)} title="Delete User"><RiDeleteBin6Fill className="text-red-600 p-1 border rounded-md border-red-600 hover:text-white hover:bg-red-600" size={25} /></button>
            </td>
        </tr>
    );
};

export default UsersData;