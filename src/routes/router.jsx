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
import Notification from "../pages/Dashboard/Notification/Notification";
import Profile from "../pages/Dashboard/profile/Profile";

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
                path: "/blog/:id",
                element: <BlogDetails />
            },
            {
                path: "/blog/:category",
                element: <Category />
            },
            {
                path: "/author/:email",
                element: <AuthorInfo />
            },
            {
                path: "/contact-us",
                element: <Contact />
            },

        ],
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            // admin routes 
            {
                path: 'admin',
                element: <AdminHome />
            },
            {
                path: 'manage-blogs',
                element: <ManageBlogs />
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            },

            //common
            {
                path: 'add-blog',
                element: <AddBlogs />
            },
            {
                path: 'my-blogs',
                element: <MyBlogs />
            },
            {
                path: 'notification',
                element: <Notification />
            },
            {
                path: 'profile',
                element: <Profile />
            },

            // author routes 
            {
                path: 'author',
                element: <AuthorHome />
            },
        ]
    }
]);
export default router;