
const Modal = ({ children, isModalOpen, closeModal }) => {
    return (

        <>
            {isModalOpen && <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative mx-3 bg-white w-full max-w-lg h-[90vh] rounded-lg p-6 shadow-lg">
                    <button className="absolute top-0 right-0 p-2 bg-black text-white rounded-bl-lg rounded-tr-lg z-10" onClick={closeModal} >Close</button >
                    {children}
                </div>
            </div >}
        </>

    );
};

export default Modal;