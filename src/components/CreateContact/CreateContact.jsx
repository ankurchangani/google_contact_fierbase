

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addContactData } from '../../Service/Action/contactAction';
import { useDispatch } from 'react-redux';

const CreateContact = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [fromdata, setFormData] = useState({
        fname: '',  
        lname: '',
        company: '',
        jobtitle: '',
        email: '',
        phone: '',
        bday: '',
        bmonth: '',
        byear: '',
        notes: '',
    });

    const handleFrom = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...fromdata, [name]: value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(addContactData(fromdata));
        navigate('/'); 
        setFormData({
            fname: '',
            lname: '',
            company: '',
            jobtitle: '',
            email: '',
            phone: '',
            bday: '',
            bmonth: '',
            byear: '',
            notes: '',
        });
    };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <button 
        onClick={() => navigate("/")} 
        className="text-blue-500 mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m9 9l-9-9 9-9" />
        </svg>
        Back to Home
      </button>
      <h2 className="text-2xl font-bold mb-4">Create a New Contact</h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSave}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="fname"
            value={fromdata.fname}
            onChange={handleFrom}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="John"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lname"
            value={fromdata.lname}
            onChange={handleFrom}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={fromdata.company}
            onChange={handleFrom}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Company Inc."
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobTitle">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobtitle"
            value={fromdata.jobtitle}
            onChange={handleFrom}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Software Engineer"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={fromdata.email}
            onChange={handleFrom}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="john.doe@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={fromdata.phone}
            onChange={handleFrom}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="(123) 456-7890"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthday">
            Birthday
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="MM"
              name="bday"
              value={fromdata.bday}
              onChange={handleFrom}
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="1" max="12"
            />
            <input
              type="number"
              placeholder="DD"
              name="bmonth"
              value={fromdata.bmonth}
              onChange={handleFrom}
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="1" max="31"
            />
            <input
              type="number"
              placeholder="YYYY"
              name="byear"
              value={fromdata.byear}
              onChange={handleFrom}
              className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="1900" max={new Date().getFullYear()}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={fromdata.notes}
            onChange={handleFrom}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Additional notes..."
            rows="4"
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow focus:outline-none focus:shadow-outline"
            type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateContact;
