import { Link, useLocation, useNavigate } from "react-router-dom";
import Google from "../../components/shared/SocialLogin/Google";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { DataContext } from "../../provider/AppContext";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";
import ScrollToTop from "../../components/ScrollToTop";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const { storeUsers } = useContext(DataContext);
    const { handleSubmit, register } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                const userData = {
                    name: user?.displayName || data.name,
                    email: user?.email,
                    profileImage: user?.photoURL || 'https://i.ibb.co.com/zFMrg3c/avatar.png',
                    address: null,
                    phone: null,
                    dob: null,
                    bio: '',
                    userSince: new Date(),
                    role: 'user'
                };
                storeUsers(userData);
                if (user && user?.email) toast.success('Registration Successful');
                navigate(from, { replace: true });
            })
            .catch(err => {
                const errorMessage = err.code.split('/')[1].split('-').join(' ');
                toast.error(errorMessage);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <ScrollToTop />
            <Helmet>
                <title>Register | Blog Express</title>
            </Helmet>
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-900">Sign up</h1>
                </div>

                <Google />

                <div className="relative flex items-center justify-center my-6">
                    <span className="absolute bg-white px-3 text-gray-500">or Sign up with email:</span>
                    <hr className="w-full border-gray-300" />
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input
                            id="name"
                            type="text"
                            {...register("name")}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                            placeholder="Full Name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            id="email"
                            type="email"
                            {...register("email")}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>
                    <div>
                        <input
                            id="password"
                            type="password"
                            {...register("password")}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-sm">
                        Already have an account? <Link className="hover:underline text-blue-500" to="/login">Login</Link>
                    </p>
                    <p className="text-sm text-blue-500 hover:underline">
                        <Link>Forgot Password?</Link>
                    </p>
                </div>

                <p className="text-xs text-center text-gray-400">
                    By signing up, you agree to BlogExpress{" "}
                    <Link className="text-blue-500 hover:underline">
                        Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link className="text-blue-500 hover:underline">
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Register;
