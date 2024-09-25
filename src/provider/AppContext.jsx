import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, useContext } from 'react';
import { AuthContext } from './AuthProvider';
import axios from 'axios';

export const DataContext = createContext()

const AppContext = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const queryClient = useQueryClient();

    //get all users
    const { data: users = [] } = useQuery({
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
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_APIURL}/blogs`)
            return res.data
        }
    })

    //get singleblogs by id


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
    role,
    users,
    blogs,
    storeUsers: userInfoMutation.mutate,
    updateUserRole: mutation.mutate,
    deleteUser: deleteUserMutation.mutate,
    imageUpload: uploadImageMutation.mutateAsync,
    postBlog: postBlogMutation.mutate,
}
return (
    <DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
);
};

export default AppContext;