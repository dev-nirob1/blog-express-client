import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../../provider/AppContext";

const Google = () => {
    const { googleLogin} = useContext(AuthContext)
    const { storeUsers } = useContext(DataContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                const userData = {
                    name: loggedUser?.displayName || 'unknown',
                    email: loggedUser?.email,
                    profileImage: loggedUser?.photoURL || 'https://i.ibb.co.com/zFMrg3c/avatar.png',
                    address: null,
                    phone: null,
                    dob: null,
                    bio: '',
                    userSince: new Date(),
                    role: 'user'
                }
                storeUsers(userData)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.code)
            })
    }
    return (
        <div className="text-center my-6">
            <button onClick={handleGoogleLogin} className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none"
            >
                Continue With Google
            </button>

        </div>
    );
};

export default Google;