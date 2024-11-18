import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CreateContact from './components/CreateContact/CreateContact';
import Sidebar from './components/siderbar/siderbar';
import EditContact from './components/EditContact/EditContact';
import Profile from './components/Profile/Profile';


function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    return (
        <div className="flex h-screen">
            <div className="fixed top-0 left-0 h-full z-50">
                <Sidebar />
            </div>
            <div className={`flex-1 flex flex-col transition-all duration-300 ml-64`}>
                {/* <Header /> */}

                <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />

                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home  searchQuery={searchQuery} />} />
                        <Route path="/profile/:id" element={<Profile />} />
                        <Route path="/create" element={<CreateContact />} />
                        <Route path="/edit/:id" element={<EditContact />} />
                      
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;





