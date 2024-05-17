import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/Main/MainLayout";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Category from "../pages/blogCategory/Category";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import AuthorInfo from "../pages/author/AuthorInfo";
import Error from "../pages/ErrorPage/Error";

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

        ]
    },
]);
export default router;