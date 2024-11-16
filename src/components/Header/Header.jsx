
import React, { useState, useEffect } from 'react';
import { HiUserAdd, HiCog, HiPhone } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithGoogle, logout } from '../../Service/Action/authAction';
import { auth } from '../../fierbase';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { user } = useSelector((state) => state.authReducer);


    const dispatch = useDispatch();

    const toggleDropdown = () => setIsOpen(!isOpen);

    const closeDropdown = () => setIsOpen(false);

    useEffect(() => {
        const userlogin = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {

                dispatch({ type: 'SIGN_IN_SUCCESS', payload: currentUser });
            } else {
                dispatch({ type: 'SIGN_OUT_SUCCESS' });
            }
        });
        return () => userlogin();
    }, [dispatch]);

    const handleSignIn = () => {
        dispatch(signInWithGoogle());
    };

    const handleSignOut = () => {
        dispatch(logout());
    };

    return (
        <header className="bg-white shadow-md">
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">

                <div className="flex items-center bg-gray-100 p-2 rounded-md shadow-md w-9/12">
                    <HiUserAdd className="text-gray-600" size={20} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-100 text-gray-700 p-1 ml-2 outline-none placeholder-gray-400 w-full"
                    />
                </div>
                {/* User Profile and Dropdown */}
                <div className="relative flex items-center">
                    <div className="text-gray-600 flex space-x-3">
                        <HiCog size={24} />
                        <HiPhone size={24} />
                        <button
                            onClick={toggleDropdown}
                            className="relative focus:outline-none"
                        >
                            <img
                                src={user ? user.photoURL : "https://via.placeholder.com/150"}
                                alt="User Profile"
                                className="user-avatar"
                            />

                        </button>
                    </div>

                    {isOpen && (
                        <div className="popup">
                            <div className="popup-content">
                                <span className="close-btn" onClick={closeDropdown}></span>
                                <div className="user-info">
                                    <img
                                        src={user ? user.photoURL : "https://via.placeholder.com/150"}
                                        alt="User Profile"
                                        className="user-avatar"
                                    />

                                    <div className="user-details">
                                        {user ? (
                                            <>
                                                <p className="user-email">{user.email}</p>
                                                <p className="user-name">Hi, {user.displayName}!</p>
                                                <button
                                                    className="sign-out-btn mt-3"
                                                    onClick={handleSignOut}
                                                >
                                                    <span className="arrow-icon">→</span> Sign out
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                className="sign-in-btn mt-3"
                                                onClick={handleSignIn}
                                            >
                                                <span className="plus-icon">+</span> Sign in with Google
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <button
                                    className="manage-account-btn mb-3"
                                    onClick={() =>
                                        window.open("https://myaccount.google.com/", "_blank")
                                    }
                                >
                                    Manage your Google Account
                                </button>
                                <div className="popup-footer">
                                    <p>Privacy Policy</p>
                                    <p>Terms of Service</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;