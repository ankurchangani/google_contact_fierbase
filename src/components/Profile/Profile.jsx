

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../fierbase"; // Correct path to Firebase config

const Profile = () => {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContact = async () => {
            try {
                const docRef = doc(db, "Contact", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setContact(docSnap.data());
                } else {
                    setError("No such contact found!");
                }
            } catch (error) {
                setError("Error fetching contact.");
                console.error("Error fetching contact:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchContact();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg mt-5">
            <h2 className="text-2xl font-bold text-center">{`${contact.fname} ${contact.lname}`}</h2>
            <div className="text-center mb-2">
                <strong>Email:</strong> {contact.email}
            </div>
            <div className="text-center mb-2">
                <strong>Phone:</strong> {contact.phone}
            </div>
            {contact.birthday && (
                <div className="text-center mb-2">
                    <strong>Birthday:</strong> {contact.birthday}
                </div>
            )}
            <div className="text-center mb-2">
                <strong>Schedule:</strong> {contact.schedule || "Not available"}
            </div>
            <div className="text-center mb-2">
                <strong>Chat:</strong> {contact.chat || "Not available"}
            </div>
            <div className="text-center mb-2">
                <strong>Video:</strong> {contact.video || "Not available"}
            </div>
        </div>
    );
};

export default Profile;

