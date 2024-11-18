



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiPlus, HiPhone, HiCog, HiHome, HiUserAdd, HiMenu } from 'react-icons/hi';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const { contacts } = useSelector((state) => state.contactReducer);

    const contactCount = Array.isArray(contacts) ? contacts.length : 0;

    const [isOpen, setIsOpen] = useState(true);

 
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`fixed top-0 left-0 h-full ${isOpen ? 'w-64' : 'w-16'} text-black p-4 z-50 transition-all duration-300`}
            style={{ background: '#F8FAFD' }}
        >
            <div className='flex items-center'>
            <h2 className="text-lg font-bold  cursor-pointer" onClick={toggleSidebar}>
                <HiMenu className="w-6 h-6" />
            </h2>

            <div className="flex items-center">

                <img
                    src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png"
                    alt="Contacts Icon"
                    className="w-8 h-8 ml-2"
                />
                <span className="ml-2 font-bold  text-3xl opacity-80  " style={{color : "#5f6368" }}>Contacts</span>
            </div>

            </div>
            <ul>
                <li className="py-2">
                    <Link
                        to="/create"
                        className="flex items-center p-2 rounded text-black"
                        style={{ background: '#C2E7FF' }}
                    >
                        <HiPlus />
                        {isOpen && <span className="ml-2">Create Contact</span>}
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="/"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiPhone />
                        {isOpen && <span className="ml-2">Contacts ({contactCount})</span>}
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiCog />
                        {isOpen && <span className="ml-2">Frequent</span>}
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiHome />
                        {isOpen && <span className="ml-2">Other Contacts</span>}
                    </Link>
                </li>
                <li className="mt-6 mb-2 text-sm font-bold text-gray-400">
                    {isOpen && 'Fix and Manage'}
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiUserAdd />
                        {isOpen && <span className="ml-2">Merge and Fix</span>}
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiCog />
                        {isOpen && <span className="ml-2">Import</span>}
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiPhone />
                        {isOpen && <span className="ml-2">Bin</span>}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
