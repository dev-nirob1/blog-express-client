import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { DataContext } from "../provider/AppContext";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { toast } from "react-toastify";

const SharedRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const { role } = useContext(DataContext);
    const [isRoleLoading, setIsRoleLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && !isRoleLoading) {
            if (!user || !user.email || (role !== 'author' && role !== 'admin')) {
                toast.error("You are not authorized to access this page.");
                navigate("/");
            }
        }
    }, [loading, isRoleLoading, user, role, navigate]);

    useEffect(() => {
        if (role) {
            setIsRoleLoading(false);
        }
    }, [role]);


    if (loading || isRoleLoading) {
        return <Loader />;
    }

    return children;
};

export default SharedRoutes;