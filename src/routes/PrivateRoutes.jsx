import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="text-5xl">loading...</div>
    }

    if(user && user?.email){
        return children;
    } 
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;