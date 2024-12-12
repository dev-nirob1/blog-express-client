import { useContext, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import UpdateProfile from "./UpdateProfile";
import { DataContext } from "../../provider/AppContext";
import { AuthContext } from "../../provider/AuthProvider";

const ProfileCard = () => {
    const [tab, setTab] = useState('profile')
    const { user } = useContext(AuthContext)
    const { allUsers } = useContext(DataContext)

    const specificUsersData = allUsers?.find(data => data?.email === user?.email)
    console.log(specificUsersData)
    // console.log(users)

    return (
        <div className="w-full mx-auto">
            {/* Top banner */}
            {tab === 'profile' && <ProfileInfo specificUsersData={specificUsersData} setTab={setTab} />}
            {tab === 'update' && <UpdateProfile specificUsersData={specificUsersData} setTab={setTab} />}
        </div>
    );
};

export default ProfileCard;
