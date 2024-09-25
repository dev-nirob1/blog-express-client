import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { DataContext } from "../provider/AppContext";
import { useNavigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const { role } = useContext(DataContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && (!user || !user.email || role !== 'admin')) {
            alert("You are not authorized to access this page.");
            navigate("/");
        }
    }, [loading, user, role, navigate])


    if (loading) {
        return <div className="text-5xl">loading...</div>
    }

    if (user && user?.email && role === 'admin') {
        return children
    }
    return null
};

export default AdminRoutes;