import { Link } from "react-router-dom";
import Google from "../../components/shared/SocialLogin/Google";

const Register = () => {
    return (
        <div className="container mx-auto py-16">
            <div className="max-w-lg mx-auto border border-blue-500">
                <div>
                    <h1 className="p-5 bg-blue-500 text-white text-2xl font-medium text-center">Sign up</h1>
                </div>
                <div className="mb-8 p-5">
                    <form className="space-y-6">
                        <label htmlFor="name"></label>
                        <input className="block border w-full p-[10px] rounded" type="text" name="name" placeholder="Full Name" />

                        <label htmlFor="email"></label>
                        <input className="block border w-full p-[10px] rounded" type="email" name="email" placeholder="Enter Your Email" />

                        <label htmlFor="password"></label>
                        <input className="block border w-full p-[10px] rounded" type="password" name="password" placeholder="Password" />

                        <button className="block w-full p-[10px] cursor-pointer text-white bg-blue-500 font-medium rounded" type="submit" >
                            Sign Up
                        </button>
                    </form>

                    <Google />

                    <div className="text-center font-medium text-gray-600 space-y-4">
                        <p>Already have an account? <Link to='/login'>Login</Link> </p>
                        <p><Link to='/register'>Forget Password?</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;