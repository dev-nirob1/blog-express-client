import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const AdminHome = () => {
    const [data, setData] = useState({
        totalBlogs: 4,
        approvedBlogs: 4,
        deniedBlogs: 3,
        pendingBlogs: 7,
        totalUsers: 34,
        totalAdmins:45,
        totalAuthors: 54,
    });

    const COLORS = ['#4CAF50', '#2196F3', '#FF5722', '#FFC107'];

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/dashboard/stats`);
            setData(res.data);
        };
        fetchData();
    }, []);

    const blogStats = [
        { name: 'Approved Blogs', value: data.approvedBlogs },
        { name: 'Denied Blogs', value: data.deniedBlogs },
        { name: 'Pending Blogs', value: data.pendingBlogs },
    ];

    const userStats = [
        { name: 'Admins', value: data.totalAdmins },
        { name: 'Authors', value: data.totalAuthors },
        { name: 'Users', value: data.totalUsers - data.totalAdmins - data.totalAuthors },
    ];

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Total Metrics */}
                <div className="bg-white shadow-md rounded-lg p-5">
                    <h2 className="text-xl font-semibold mb-3">Total Metrics</h2>
                    <ul className="space-y-2">
                        <li>Total Blogs: {data.totalBlogs}</li>
                        <li>Total Approved Blogs: {data.approvedBlogs}</li>
                        <li>Total Denied Blogs: {data.deniedBlogs}</li>
                        <li>Total Pending Blogs: {data.pendingBlogs}</li>
                        <li>Total Users: {data.totalUsers}</li>
                        <li>Total Admins: {data.totalAdmins}</li>
                        <li>Total Authors: {data.totalAuthors}</li>
                    </ul>
                </div>

                {/* Blog Stats Pie Chart */}
                <div className="bg-white shadow-md rounded-lg p-5">
                    <h2 className="text-xl font-semibold mb-3">Blog Stats</h2>
                    <PieChart width={400} height={300}>
                        <Pie
                            data={blogStats}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                        >
                            {blogStats.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>

                {/* User Stats Pie Chart */}
                <div className="bg-white shadow-md rounded-lg p-5">
                    <h2 className="text-xl font-semibold mb-3">User Stats</h2>
                    <PieChart width={400} height={300}>
                        <Pie
                            data={userStats}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#82ca9d"
                            label
                        >
                            {userStats.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;