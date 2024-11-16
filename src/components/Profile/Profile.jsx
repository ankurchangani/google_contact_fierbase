import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlinePencil, HiOutlineMail, HiOutlineCalendar, HiOutlineChat, HiOutlineVideoCamera, HiOutlinePlus } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../fierbase';

const Profile = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

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
    <div className="p-6 pt-8 max-w-full ml-[0px] mx-auto bg-white shadow-lg rounded-lg h-full">
      <div className="flex justify-between items-center">
        <button onClick={() => navigate("/")} className="flex items-center">
          <HiOutlineArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-[10px]">
          <button>
            <HiOutlinePencil size={24} />
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-3xl shadow focus:outline-none focus:shadow-outline">
            Edit
          </button>
          <button>
            <HiOutlineMail size={24} />
          </button>
          <button>
            <HiOutlineCalendar size={24} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-[30px] my-[20px]">
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png"
            alt="Profile"
            className="w-[161px] h-[161px] rounded-full"
          />
          <div className="flex justify-center items-center bg-[#C2E7FF] w-[48px] h-[48px] rounded-full absolute right-0 bottom-0 border-solid border-4 border-white">
            <HiOutlinePlus size={24} />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6">
          {contact?.fname ? `${contact.fname} ${contact.lname}` : "No name available"}
        </h1>
      </div>

      <div className="flex gap-[30px] my-3">
        <div>
          <div className="bg-[#E4E4E4] h-[40px] w-[40px] rounded-full flex justify-center items-center">
            <HiOutlineMail size={24} />
          </div>
          <h6 className="text-[12px] text-center pt-1">Email</h6>
          
        </div>
        <div>
          <div className="bg-[#E4E4E4] h-[40px] w-[40px] rounded-full flex justify-center items-center">
            <HiOutlineCalendar size={24} />
          </div>
          <h6 className="text-[12px] text-center pt-1">Phone</h6>
        
        </div>
        <div>
          <div className="bg-[#E4E4E4] h-[40px] w-[40px] rounded-full flex justify-center items-center">
            <HiOutlineChat size={24} />
          </div>
          <h6 className="text-[12px] text-center pt-1">Birthday</h6>
        
        </div>
        <div>
          <div className="bg-[#E4E4E4] h-[40px] w-[40px] rounded-full flex justify-center items-center">
            <HiOutlineVideoCamera size={24} />
          </div>
          <h6 className="text-[12px] text-center pt-1">Video</h6>
        </div>
      </div>

      <button className="rounded-[6px] border-solid border-[2px] border-black text-[12px] flex items-center gap-[2px] p-[3px]">
        <HiOutlinePlus size={24} />
        Label
      </button>

      <div className="bg-[#F0F4F9] w-[520px] mt-3 p-3 rounded-xl">
        <h2 className="font-[600] text-[20px]">Contact details</h2>
        <div className="mb-2">
          <h3 className="font-bold flex items-center gap-[20px]">
            <HiOutlineMail size={24} />
            {contact?.email || "No email available"}
          </h3>
        </div>
        <div className="mb-2">
          <h3 className="font-bold flex items-center gap-[20px]">
            <HiOutlineCalendar size={24} />
            {contact?.phone || "No phone available"}
          </h3>
        </div>
        <div className="mb-2">
          <h3 className="font-bold flex items-center gap-[20px]">
            <HiOutlineChat size={24} />
            {contact?.bday && contact?.bmonth && contact?.byear
              ? `${contact.bday}/${contact.bmonth}/${contact.byear}`
              : "No birthday available"}
          </h3>
        </div>
       
      </div>
    </div>
  );
};

export default Profile;
