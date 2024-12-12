import { useContext } from "react";
import {
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    AreaChart,
    Area,
} from "recharts";

import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Loader from "../../../components/Loader/Loader";
import ScrollToTop from "../../../components/ScrollToTop";

const AuthorHome = () => {
    const { user } = useContext(AuthContext);
    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/author-stats/${user?.email}`);
            console.log(res);
            return res.data;
        },
    });

    const blogChartData = [
        { name: "Pending", value: stats.totalPendingBlogs || 0 },
        { name: "Approved", value: stats.totalApprovedBlogs || 0 },
        { name: "Denied", value: stats.totalDeniedBlogs || 0 },
    ];

    return (
        <div className="p-5">
            <ScrollToTop/>
            <Helmet>
                <title>Author Overview | Dashboard</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-5">Dashboard Overview</h1>

            {isLoading && <Loader />}

            {!isLoading && (
                <>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="border rounded-lg p-10 text-lg md:text-xl font-bold text-center bg-gradient-to-r from-purple-700 to-purple-500 text-white">
                            <p>{stats?.totalBlogs || 0}</p>
                            <h3>Blogs</h3>
                        </div>
                        <div className="border rounded-lg p-10 text-xl font-bold text-center bg-gradient-to-r from-orange-700 to-orange-500 text-white">
                            <p>{stats?.totalPendingBlogs || 0}</p>
                            <h3>Pending</h3>
                        </div>
                        <div className="border rounded-lg p-10 text-xl font-bold text-center bg-gradient-to-r from-green-700 to-green-500 text-white">
                            <p>{stats?.totalApprovedBlogs || 0}</p>
                            <h3>Approved</h3>
                        </div>
                        <div className="border rounded-lg p-10 text-xl font-bold text-center bg-gradient-to-r from-red-700 to-red-500 text-white">
                            <p>{stats.totalDeniedBlogs || 0}</p>
                            <h3>Denied</h3>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-5 w-full mt-5">
                        <h3 className="text-xl font-bold mb-5 text-center">Blog Statistics</h3>
                        <div className="h-72 w-full">
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={blogChartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="value" stroke="#8884d8" fill="url(#colorValue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AuthorHome;
