import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/Main/MainLayout";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Category from "../pages/blogCategory/Category";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import AuthorInfo from "../pages/author/AuthorInfo";
import Error from "../pages/ErrorPage/Error";
import Dashboard from "../layout/Dashboard/Dashboard";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import AuthorHome from "../pages/Dashboard/Author/AuthorHome";
import ManageBlogs from "../pages/Dashboard/Admin/Blogs/ManageBlogs";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddBlogs from "../pages/Dashboard/AddBlogs/AddBlogs";
import MyBlogs from "../pages/Dashboard/MyBlogs/MyBlogs";
import Register from "../pages/Register/Register";
import Login from "../pages/login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../pages/blogs/Blogs";
import AdminRoutes from "./AdminRoutes";
import AuthorRoutes from "./AuthorRoutes";
import SharedRoutes from "./SharedRoutes";
import Update from "../pages/Dashboard/UpdateBlog/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about-us",
                element: <About />
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/blog/:id",
                element: <PrivateRoutes><BlogDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_APIURL}/blog/${params.id}`)
            },
            {
                path: "/blogs/:category",
                element: <PrivateRoutes><Category /></PrivateRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_APIURL}/blogs/${params.category}`)
            },
            {
                path: "/author/:email",
                element: <AuthorInfo />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/contact-us",
                element: <Contact />
            },

        ],
    },
    {
        path: 'dashboard',
        element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
        children: [
            // admin routes 
            {
                path: '/dashboard/admin',
                element: <AdminRoutes><AdminHome /></AdminRoutes>
            },
            {
                path: 'manage-blogs',
                element: <AdminRoutes><ManageBlogs /></AdminRoutes>
            },
            {
                path: 'manage-users',
                element: <AdminRoutes><ManageUsers /></AdminRoutes>
            },

            //common
            {
                path: 'add-blog',
                element: <SharedRoutes><AddBlogs /></SharedRoutes>
            },
            {
                path: 'my-blogs',
                element: <SharedRoutes><MyBlogs /></SharedRoutes>
            },
            {
                path: 'update-blog/:id',
                element: <SharedRoutes><Update /></SharedRoutes>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_APIURL}/blog/${params.id}`) 
            },

            // author routes 
            {
                path: '/dashboard/author',
                element: <AuthorRoutes><AuthorHome /></AuthorRoutes>
            },
        ]
    }
]);
export default router;