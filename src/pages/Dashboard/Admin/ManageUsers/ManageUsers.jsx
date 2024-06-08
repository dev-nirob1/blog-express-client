import UsersData from "../../../../components/dashboard/UsersData/UsersData";
import OutletSearchbar from "../../../../components/dashboard/common/OutletSearchbar";

const ManageUsers = () => {
    return (
        <div className="py-5 w-[95%] mx-auto">
            <OutletSearchbar
                routeName='Total Users'
                length="20"
            />

            <div className="overflow-x-auto">
                <table className="text-sm w-full text-left overflow-x-hidden border">
                    <thead className="border text-neutral-700">
                        <tr className="w-full">
                            <th className="p-2">SL</th>
                            <th className="p-2">Image</th>
                            <th className="p-2">Name</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Role</th>
                            <th className="p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UsersData />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;