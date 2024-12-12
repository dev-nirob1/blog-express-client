import moment from "moment";

const ProfileInfo = ({ specificUsersData, setTab }) => {
    const { name, email, profileImage, role, phone, bio, address, userSince, dob } = specificUsersData;
    return (
        <>
            <div className="bg-gray-200 h-24 rounded-t-lg flex items-center justify-center">
                <p className="text-4xl">BlogExpress</p>
            </div>
            <div className="pb-6 rounded-b-lg shadow-lg">
                <div className="pl-6 -mt-6 flex gap-4 items-center justify-start">
                    <div>
                        <img
                            className="h-24 w-24 rounded-full border-4 border-white bg-gray-300"
                            src={profileImage}
                            alt="image" />
                    </div>
                    <div className="space-y-1">
                        <p className="font-semibold mt-5 text-xl">{name}</p>
                        <p className="font-semibold"><span className="border rounded-md px-4 py-1">{role}</span></p>
                    </div>
                </div>
                <div className="flex flex-col border p-3 m-5">
                    <p className="text-center font-medium">Bio</p>
                    <span className="text-center">{bio ? bio : 'n/a'}</span>
                    <hr className="my-3" />
                    <p><span className="font-medium">User Since:</span> {moment(userSince).format("Do MMM YYYY")}</p>
                    <p><span className="font-medium">Email:</span> {email}</p>
                    <p><span className="font-medium">Phone:</span> {phone ? phone : 'n/a'}</p>
                    <p><span className="font-medium">Address:</span> {address ? address : 'n/a'}</p>
                    <p><span className="font-medium">Date of Birth:</span> {dob ? moment(dob).format("Do MMM YYYY") : 'n/a'}</p>
                </div>
                <div className="text-center">
                    <button onClick={() => setTab('update')} className="border rounded-md px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium">Edit Profile</button>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;