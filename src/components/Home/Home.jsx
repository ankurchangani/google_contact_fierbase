
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, removeContactData } from '../../Service/Action/contactAction';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { contacts, loading } = useSelector((state) => state.contactReducer);
    const contactsArray = Array.isArray(contacts) ? contacts : [];

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleEditContact = (contact) => {
        navigate(`/edit/${contact.id}`, { state: { contact } });
    };

    const handleRemoveContact = (id) => {
        dispatch(removeContactData(id));
    };

    const handleViewProfile = (id) => {
        navigate(`/profile/${id}`);
    };

    return (
        <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-5">
            <h1 className="text-2xl font-bold mb-4 text-center">Contacts Management</h1>
            {loading ? (
                <div className="flex justify-center items-center">

                    <div className="loader "></div>
                </div>
            ) : contactsArray.length === 0 ? (
                <p className="text-center">No contacts available.</p>
            ) : (
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                            <th className="py-2 px-4 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactsArray.map((contact) => (
                            <tr key={contact.id} className="hover:bg-gray-50 transition">
                                <td className="py-2 px-4 border-b text-black text-center">{`${contact.fname} ${contact.lname}`}</td>
                                <td className="py-2 px-4 border-b text-gray-700 text-center">{contact.email}</td>
                                <td className="py-2 px-4 border-b text-gray-700 text-center">{contact.phone}</td>
                                <td className="py-2 px-4 border-b text-center">
                                    <button onClick={() => handleViewProfile(contact.id)} className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 transition mr-1">View Profile</button>

                                    <button onClick={() => handleEditContact(contact)} className="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600 transition mr-1">Edit</button>
                                    
                                    <button onClick={() => handleRemoveContact(contact.id)} className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Home;



