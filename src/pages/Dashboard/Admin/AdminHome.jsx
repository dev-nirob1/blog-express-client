import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../../../components/Loader/Loader";
import { Helmet } from "react-helmet-async";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import ScrollToTop from "../../../components/ScrollToTop";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/admin-stats`);
            return res.data;
        },
    });

    const userChartData = [
        { name: "Admin", value: stats.totalAdmin || 0 },
        { name: "Author", value: stats.totalAuthor || 0 },
        { name: "User", value: stats.normalUser || 0 },
    ];

    const blogChartData = [
        { name: "Pending", value: stats.totalPendingBlogs || 0 },
        { name: "Approved", value: stats.totalApprovedBlogs || 0 },
        { name: "Denied", value: stats.totalDeniedBlogs || 0 },
    ];

    return (
        <div className="p-5">
            <ScrollToTop/>
            <Helmet>
                <title>Overview | Dashboard</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-5">Dashboard Overview</h1>

            {isLoading && <Loader />}

            {!isLoading && (
                <>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="border rounded-lg p-10 text-lg md:text-xl font-bold text-center bg-gradient-to-r from-purple-700 to-purple-500 text-white">
                            <p>{stats.blogs || 0}</p>
                            <h3>Blogs</h3>
                        </div>

                        <div className="border rounded-lg p-10 text-xl font-bold text-center bg-gradient-to-r from-pink-700 to-pink-500 text-white">
                            <p>{stats.users || 0}</p>
                            <h3>Users</h3>
                        </div>

                        <div className="border rounded-lg p-10 text-xl font-bold text-center bg-gradient-to-r from-indigo-700 to-indigo-500 text-white">
                            <p>{stats.totalAdmin || 0}</p>
                            <h3>Admin</h3>
                        </div>

                        <div className="border rounded-lg p-10 text-xl font-bold text-center bg-gradient-to-r from-orange-700 to-orange-500 text-white">
                            <p>{stats.totalAuthor || 0}</p>
                            <h3>Author</h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                        <div className="bg-white shadow-md rounded-lg p-5">
                            <h3 className="text-xl font-bold mb-5 text-center">User Distribution</h3>
                            <PieChart width={400} height={300}>
                                <Pie
                                    data={userChartData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label
                                >
                                    {userChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </div>

                        <div className="bg-white shadow-md rounded-lg p-5">
                            <h3 className="text-xl font-bold mb-5 text-center">Blog Statistics</h3>
                            <BarChart
                                width={500}
                                height={300}
                                data={blogChartData}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default AdminHome;
