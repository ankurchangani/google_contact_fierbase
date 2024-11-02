import React from 'react';
import { Link } from 'react-router-dom';
import { HiUserAdd, HiPhone, HiCog, HiHome } from 'react-icons/hi';


const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-full w-64 text-black p-4 z-50" style={{ background: '#F8FAFD' }}>
             <h2 className="text-lg font-bold mb-4">Menu</h2>
            <ul>
                <li className="py-2">
                    <Link
                        to="/create"
                        className="flex items-center bg-blue-500 hover:bg-blue-600 p-2 rounded text-white"
                    >
                        <HiUserAdd />
                        <span className="ml-2">Create Contact</span>
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="/"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiPhone />
                        <span className="ml-2">Contacts</span>
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiCog />
                        <span className="ml-2">Frequent</span>
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiHome />
                        <span className="ml-2">Other Contacts</span>
                    </Link>
                </li>
                <li className="mt-6 mb-2 text-sm font-bold text-gray-400">Fix and Manage</li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiUserAdd />
                        <span className="ml-2">Merge and Fix</span>
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiCog />
                        <span className="ml-2">Import</span>
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="#"
                        className="flex items-center hover:bg-blue-100 p-2 rounded transition duration-200"
                    >
                        <HiPhone />
                        <span className="ml-2">Bin</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
