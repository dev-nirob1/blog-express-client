import UsersData from "../../../../components/dashboard/UsersData/UsersData";
import OutletSearchbar from "../../../../components/dashboard/common/OutletSearchbar";
import { useContext } from "react";
import { DataContext } from "../../../../provider/AppContext";
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../../../components/ScrollToTop";

const ManageUsers = () => {
    const { allUsers } = useContext(DataContext)

    return (
        <div className="py-5 w-[95%] mx-auto">
            <ScrollToTop />
            <Helmet>
                <title>Manage Users | Blog Express</title>
            </Helmet>
            <OutletSearchbar
                routeName='Total Users'
                length={allUsers.length}
            />

            <div className="overflow-x-auto mt-5">

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
                    {allUsers.length === 0 ?
                        <p className="text-center py-5">No Data Found</p>
                        :
                        <tbody>
                            {
                                allUsers.map((userData, index) => <UsersData key={userData._id} userData={userData} index={index} />)
                            }
                        </tbody>}
                </table>

            </div>
        </div>
    );
};

export default ManageUsers;
