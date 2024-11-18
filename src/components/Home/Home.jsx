
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, removeContactData } from '../../Service/Action/contactAction';
import { useNavigate } from 'react-router-dom';
import { HiDotsVertical, HiPencil, HiTrash, HiPrinter, HiDownload, HiStar } from 'react-icons/hi';

const Home = ({ searchQuery }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { contacts, loading, error } = useSelector((state) => state.contactReducer);

    const [selectedContacts, setSelectedContacts] = useState([]);
    
    const [dropdownOpen, setDropdownOpen] = useState(null);

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

    const handleSelectContact = (id) => {
        setSelectedContacts((prev) =>
            prev.includes(id) ? prev.filter((contactId) => contactId !== id) : [...prev, id]
        );
    };

    const handleDeleteSelected = () => {
        selectedContacts.forEach((id) => {
            dispatch(removeContactData(id));
        });
        setSelectedContacts([]);
    };

    const handlePrint = () => {
        console.log("Printing contacts...");
    };

    const handleExport = () => {
        console.log("Exporting contacts...");
    };

    // Filter contacts based on search query
    const filteredContacts = contactsArray.filter(contact =>
        `${contact.fname} ${contact.lname}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||

        contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||

        contact.phone.includes(searchQuery)
    );

    return (
        <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-5">
            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="loader"></div>
                </div>
            ) : error ? (
                <p className="text-red-500 text-center">Network Error: {error.message || 'Failed to load contacts.'}</p>
            ) : filteredContacts.length === 0 ? (
                <p className="text-center">No contacts available.</p>
            ) : (
                <div>
                    <div className="mb-4">
                        {selectedContacts.length > 0 && (
                            <button
                                onClick={handleDeleteSelected}
                                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                            >
                                Delete ({selectedContacts.length})
                            </button>
                        )}
                    </div>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b">
                                    <input
                                        type="checkbox"
                                        onChange={(e) =>
                                            e.target.checked
                                                ? setSelectedContacts(filteredContacts.map((contact) => contact.id))
                                                : setSelectedContacts([])
                                        }
                                        checked={selectedContacts.length === filteredContacts.length}
                                    />
                                </th>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Phone</th>
                                <th className="py-2 px-4 border-b border-b-black">
                                    <div>
                                        <button className="bg-[#ffffff] p-2 rounded-full hover:bg-[#d7d6d6] transition mr-1">
                                            <HiPrinter className="w-6 h-6 text-gray-600" />
                                        </button>
                                        <button className="bg-[#ffffff] p-2 rounded-full hover:bg-[#d7d6d6] transition mr-1">
                                            <HiDownload className="w-6 h-6 text-gray-600" />
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredContacts.map((contact) => (
                                <tr key={contact.id} className="hover:bg-gray-50 transition">
                                    <td className="py-2 px-4 border-b text-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedContacts.includes(contact.id)}
                                            onChange={() => handleSelectContact(contact.id)}
                                        />
                                    </td>
                                    <td className="py-2 px-4 border-b text-black text-center">
                                        {`${contact.fname} ${contact.lname}`}
                                    </td>
                                    <td className="py-2 px-4 border-b text-gray-700 text-center">{contact.email}</td>
                                    <td className="py-2 px-4 border-b text-gray-700 text-center">{contact.phone}</td>
                                    <td className="py-2 px-4 border-b text-center">
                                        <div className="flex items-center justify-center space-x-6">
                                            <button>
                                                <HiStar className="w-6 h-6 text-gray-600" />
                                            </button>

                                            <button
                                                onClick={() => handleEditContact(contact)}
                                                className="flex text-sm text-black hover:bg-gray-100"
                                            >
                                                <HiPencil className="w-5 h-5" />
                                            </button>

                                            <div className="relative">
                                                <button
                                                    onClick={() => setDropdownOpen(dropdownOpen === contact.id ? null : contact.id)}
                                                    className="text-gray-600 hover:text-gray-900"
                                                    aria-expanded={dropdownOpen === contact.id ? 'true' : 'false'}
                                                    aria-haspopup="true"
                                                >
                                                    <HiDotsVertical className="w-5 h-5" />
                                                </button>

                                                {dropdownOpen === contact.id && (
                                                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                                                        <div className="py-1">
                                                            <button
                                                                onClick={() => handleViewProfile(contact.id)}
                                                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                View Profile
                                                            </button>

                                                            <button
                                                                onClick={() => handleRemoveContact(contact.id)}
                                                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                                            >
                                                                <HiTrash className="inline-block mr-2" /> Delete
                                                            </button>

                                                            <button
                                                                onClick={handlePrint}
                                                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                <HiPrinter className="inline-block mr-2" /> Print
                                                            </button>

                                                            <button
                                                                onClick={handleExport}
                                                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                <HiDownload className="inline-block mr-2" /> Export
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Home;
