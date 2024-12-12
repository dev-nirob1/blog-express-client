import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import ScrollToTop from '../../components/ScrollToTop';

function AuthorInfo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState({
        name: "Jessica P",
        userName: "jessica_p",
        email: "jessica@example.com",
        profileImage: "https://via.placeholder.com/100",
        bio: "Product visual designer, expert in UI design",
        role: "UI Designer",
        memberSince: "Jan 2020",
        phone: "(123) 456-7890",
        location: "Colorado, USA",
    });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
            <ScrollToTop/>
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img
                        src={user.profileImage}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-gray-200"
                    />
                    <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                        <h2 className="text-2xl font-semibold">{user.name}</h2>
                        <p className="text-gray-600">{user.bio}</p>
                        <p className="text-gray-500">{user.location}</p>
                        <button
                            onClick={openModal}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
                <div className="mt-6 text-center md:text-left">
                    <p><span className="font-semibold">Username:</span> {user.userName}</p>
                    <p><span className="font-semibold">Email:</span> {user.email}</p>
                    <p><span className="font-semibold">Role:</span> {user.role}</p>
                    <p><span className="font-semibold">Member Since:</span> {user.memberSince}</p>
                    <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                </div>
            </div>
            <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
}

export default AuthorInfo;
