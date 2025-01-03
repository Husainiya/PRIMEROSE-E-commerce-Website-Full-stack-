import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';

// Environment variables and constants
export const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
export const currency = '$';

const App = () => {
  const [token, setToken] = useState(''); // Token state starts empty

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />

      {token === '' ? (
        <Login setToken={setToken} />
      ) : (
        <>
          {/* Navbar */}
          <Navbar setToken={setToken} />
          <hr />

          {/* Main Layout */}
          <div className="flex w-full">
            {/* Sidebar */}
            <Sidebar />

            {/* Content Area */}
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} /> 
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
