
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

export default function LoginRegisterPopup({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Handle login logic here
        try {
          const res = await axios.post('http://localhost:8000/login', { email, password })

          if(res.data === "exist"){
            history('/');
            alert("Successfully logged in")
          }
          else if(res.data === "notexist") {
            alert("User have not registered")
          }
        }
          catch (e) {
          alert("wrong details")
          console.log(e);
        }
      };

    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic here
      };


  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-md">
      <button className="absolute top-2 right-2" onClick={onClose}>
        &times;
      </button>
      <h2 className="text-2xl font-semibold mb-4">Login / Register</h2>
      <form onSubmit={handleLogin} className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-md px-3 py-2 w-full mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md px-3 py-2 w-full mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Login
        </button>
      </form>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md px-3 py-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded-md px-3 py-2 w-full mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md px-3 py-2 w-full mb-2"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
          Register
        </button>
      </form>
    </div>
  </div>
  )
}
