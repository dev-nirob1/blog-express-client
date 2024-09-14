import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Google = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/';


    const { mutate, isError, isSuccess, isLoading, error } = useMutation({
        mutationKey: ['users'],
        mutationFn: async (userData) => {
            const res = await axios.post('https://blog-express-server.vercel.app/users', userData)
            return res.data
        }
    })

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                mutate({
                    name: loggedUser?.displayName,
                    email: loggedUser?.email,
                    profileImage: loggedUser?.photoURL,
                    userSince: new Date()
                })
                navigate(from, {replace: true})
            })
            .catch(err => { console.log(err.code) })
    }
    return (
        <div className="text-center my-6">
            <button onClick={handleGoogleLogin} className="text-white font-medium bg-blue-500 p-[10px] w-full rounded"
            disabled={isLoading}
            >

                {isLoading ? 'Logging in...' : 'Continue With Google'}
            </button>

            {isError && <small className="text-red-500">{error?.code}</small>}
            {isSuccess && <small className="text-green-500">Login SuccessFull</small>}
        </div>
    );
};

export default Google;