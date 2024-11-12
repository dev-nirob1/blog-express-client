import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, useContext, useState } from 'react';
import { AuthContext } from './AuthProvider';
import axios from 'axios';

export const DataContext = createContext()

const AppContext = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const queryClient = useQueryClient();

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('')
    const blogPerPage = 3

    //get all users
    const { data: users = [], refetch: refetchUsers } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/users`);
            // console.log(res.data)
            return res.data
        }
    })

    //get user role 
    const { data: role = null } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            if (!user?.email) return null
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/users/role/${user?.email}`);
            console.log(res?.data?.role)
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

    // fetch all blogs 
    const { data: blogs = [], refetch: refetchBlogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/dashboard/blogs`)
            return res.data
        }
    })

 
    //get recent blogs
    const { data: recentBlogs = [] } = useQuery({
        queryKey: ['recentBlogs'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/blogs/recentBlogs`)
            return res.data
        }
    })

    // get editors picked blogs
    const { data: editorsPick = [] } = useQuery({
        queryKey: ['blogs', 'editorsPick'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/blogs/editorsPick`)
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

    // approve a blog (admin)
    const approveBlogMutation = useMutation({
        mutationKey: ['blog', 'approve'],
        mutationFn: async ({ id }) => {
            console.log(id)
            const res = await axios.patch(`${import.meta.env.VITE_APIURL}/blog/approve/${id}`)
            console.log(res)
            return res?.data
        }
    })
    // deny a blog (admin)
    const denyBlogMutation = useMutation({
        mutationKey: ['blog', 'deny'],
        mutationFn: async ({ id }) => {
            console.log(id)
            const res = await axios.patch(`${import.meta.env.VITE_APIURL}/blog/deny/${id}`)
            console.log(res)
            return res?.data
        }
    })

    //editors pick(admin)
    const editorPickMutation = useMutation({
        mutationKey: ['blogs', 'editorsPick'],
        mutationFn: async (status) => {
            // console.log(status.id, {status}, status.editorsPick)
            const res = await axios.patch(`${import.meta.env.VITE_APIURL}/blogs/editorsPick/${status.id}`, {editorsPick: status.editorsPick})
            // console.log(res.data)
            return res.data
        }
    })

    //post a blog
    const postBlogMutation = useMutation({
        mutationKey: ['blogs'],
        mutationFn: async (blogData) => {
            const res = await axios.post(`${import.meta.env.VITE_APIURL}/blogs`, blogData)
            console.log(res.data)
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
            // console.log('upload res from context', res, res.data)
            return res.data
        }

    })


    const data = {
        refetchUsers,
        refetchBlogs,
        page,
        setPage,
        setSearch,
        blogPerPage,
        role,
        loading,
        users,
        blogs,
        recentBlogs,
        editorsPick,
        updateEditorsPickStatus: editorPickMutation.mutateAsync,
        paginationSearchBlogs,
        storeUsers: userInfoMutation.mutate,
        updateUserRole: mutation.mutate,
        deleteUser: deleteUserMutation.mutate,
        imageUpload: uploadImageMutation.mutateAsync,
        postBlog: postBlogMutation.mutate,
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