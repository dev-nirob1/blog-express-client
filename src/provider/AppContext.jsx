import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import axios from 'axios';

export const DataContext = createContext()

const AppContext = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);
    const [blogPage, setBlogPage] = useState(1) //for dashboard
    const [search, setSearch] = useState('')
    const blogPerPage = 4
    const blogsPerPage = 5 //dashboard

    //get all users
    const { data: allUsers = [], refetch: refetchUsers } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/users`);
            return res.data
        }
    })

    //get user role 
    const { data: role = null } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            if (!user?.email) return null
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/users/role/${user?.email}`);
            return res?.data?.role;
        },
        enabled: !!user?.email && !loading
    });

    //store users info to databse
    const userInfoMutation = useMutation({
        mutationKey: ['users'],
        mutationFn: async (userData) => {
            const res = await axios.post(`${import.meta.env.VITE_APIURL}/users`, userData)
            return res.data
        }
    })

    //update users info to databse
    const UpdateUserInfoMutation = useMutation({
        mutationKey: ['user', user?.email],
        mutationFn: async (updatedData) => {
            const res = await axios.patch(`${import.meta.env.VITE_APIURL}/user/updateInfo/${user?.email}`, updatedData)
            return res.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['users']);
        }
    })

    // update user role
    const mutation = useMutation({
        mutationKey: ['users'],
        mutationFn: async ({ email, role }) => {
            const res = await axios.patch(`${import.meta.env.VITE_APIURL}/users/roleUpdate/${email}`, { role })
            return res.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['users']);
        }
    })

    //delete a user from database
    const deleteUserMutation = useMutation({
        mutationKey: ['users'],
        mutationFn: async (email) => {
            const res = await axios.delete(`${import.meta.env.VITE_APIURL}/users/${email}`)
            return res.data || null
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        }
    })

    // ********************* blogs [crud] related *****************


    //get recent blogs
    const { data: recentBlogs = [] } = useQuery({
        queryKey: ['recentBlogs'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/recentBlogs`)
            return res.data
        }
    })

    // get editors picked blogs
    const { data: editorsPick = [] } = useQuery({
        queryKey: ['blogs', 'editorsPick'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/editorsPick`)
            return res.data
        }
    })

    //fetch blogs for search and pagination
    const { data: paginationSearchBlogs = [] } = useQuery({
        queryKey: ['blogs', page, blogPerPage, search],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/blogs`, {
                params: {
                    page,
                    limit: blogPerPage,
                    search
                }
            })
            return res.data
        }
    })

    //fetch blogs for dashboard with pagination
    const { data: paginationBlogsDashboard = [], refetch: refetchBlogs } = useQuery({
        queryKey: ['blogs', 'dashboard', blogPage, blogsPerPage],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/dashboard/blogs`, {
                params: {
                    blogPage,
                    limit: blogsPerPage,
                }
            })
            return res.data
        }
    })

    // approve a blog (admin)
    const approveBlogMutation = useMutation({
        mutationKey: ['blog', 'approve'],
        mutationFn: async ({ id }) => {
            const res = await axios.patch(`${import.meta.env.VITE_APIURL}/blog/approve/${id}`)
            return res?.data
        }
    })

    // deny a blog (admin)
    const denyBlogMutation = useMutation({
        mutationKey: ['blog', 'deny'],
        mutationFn: async ({ id }) => {
            
            const res = await axios.patch(`${import.meta.env.VITE_APIURL}/blog/deny/${id}`)
            
            return res?.data
        }
    })

    //editors pick(admin)
    const editorPickMutation = useMutation({
        mutationKey: ['blogs', 'editorsPick'],
        mutationFn: async (status) => {
            // id, {status}, status.editorsPick)
            const res = await axios.patch(`${import.meta.env.VITE_APIURL}/blogs/editorsPick/${status.id}`, { editorsPick: status.editorsPick })
            // data)
            return res.data
        }
    })

    //post a blog
    const postBlogMutation = useMutation({
        mutationKey: ['blogs'],
        mutationFn: async (blogData) => {
            const res = await axios.post(`${import.meta.env.VITE_APIURL}/blogs`, blogData)
            
            return res.data
        }
    })

    const updateBlogMutation = useMutation({
        mutationKey: ['updateBlog'],
        mutationFn: async ({ id, updatedBlogData }) => {
            const res = await axios.patch(`${import.meta.env.VITE_APIURL}/updateBlog/${id}`, updatedBlogData);
            return res.data;
        }
    });

    //delete a blog
    const deleteBlogMutation = useMutation({
        mutationKey: ['blogs'], 
        mutationFn: async(id) => {
            const res = await axios.delete(`${import.meta.env.VITE_APIURL}/blog/delete/${id}`)
            return res.data
        }
    })



    //upload image
    const uploadImageMutation = useMutation({
        mutationFn: async (file) => {
            const formData = new FormData()
            formData.append('image', file)

            const res = await axios.post(`${import.meta.env.VITE_IMAGE_UPLOAD_URL}/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_API_KEY}`, formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            })
            return res.data
        }

    })


    const data = {
        isModalOpen,
        openModal,
        closeModal,
        refetchUsers,
        refetchBlogs,
        page,
        setPage,
        blogPage,
        setBlogPage,
        blogsPerPage,
        setSearch,
        blogPerPage,
        role,
        loading,
        allUsers,
        paginationBlogsDashboard,
        recentBlogs,
        editorsPick,
        paginationSearchBlogs,
        updateEditorsPickStatus: editorPickMutation.mutateAsync,
        updateBlog: updateBlogMutation.mutateAsync,
        storeUsers: userInfoMutation.mutate,
        updateUsersInfo: UpdateUserInfoMutation.mutateAsync,
        updateUserRole: mutation.mutateAsync,
        deleteUser: deleteUserMutation.mutateAsync,
        deleteBlog: deleteBlogMutation.mutateAsync,
        imageUpload: uploadImageMutation.mutateAsync,
        postBlog: postBlogMutation.mutateAsync,
        updateApproveStatus: approveBlogMutation.mutateAsync,
        updateDenyStatus: denyBlogMutation.mutateAsync
    }
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default AppContext;