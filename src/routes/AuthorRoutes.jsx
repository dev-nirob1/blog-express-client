import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { DataContext } from "../provider/AppContext";
import { useNavigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const { role } = useContext(DataContext);
    const [isRoleLoading, setIsRoleLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && !isRoleLoading) {
            if (!user || !user.email || role !== 'author') {
                alert("You are not authorized to access this page.");
                navigate("/");
            }
        }
    }, [loading, isRoleLoading, user, role, navigate]);

    useEffect(() => {
        if (role) {
            setIsRoleLoading(false);  // Set loading to false once role is fetched
        }
    }, [role]);


    if (loading || isRoleLoading) {
        return <div className="text-5xl">loading...</div>;
    }

    return children;
};

export default AdminRoutes;