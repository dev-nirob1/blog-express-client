
const BlogsData = ({ blogs, index }) => {
    const { title, author, denied, approved } = blogs
    return (
        <tr className="w-full text-neutral-600 font-medium">
            <td className="p-2">{index + 1}</td>
            <td className="p-2">{title?.length > 10 ? title.substr(0, 10) + '...' : title}</td>
            <td className="p-2">
                <div>
                    <img src={author.profileImage} alt="image" />
                    <small>{author?.name}</small>
                </div>
            </td>
            <td className="p-2">
                {approved && 'Approved'}
                {denied && 'Denied'}
                {!approved && !denied && 'Pending'}
            </td>
            <td className="p-2">
                <label htmlFor=""></label>

                <select className="border rounded p-1 cursor-pointer" name="role" id="role">
                    {!approved && <option value="user">Approve</option>}
                    {!denied && <option value="author">Deny</option>}
                    <option value="admin">Delete</option>
                </select>
            </td>
        </tr>
    );
};

export default BlogsData;