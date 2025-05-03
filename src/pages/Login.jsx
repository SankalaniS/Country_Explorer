import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import React from 'react';

function Login() {
  const navigate = useNavigate();
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [profileImage, setProfileImage] = useState(null); // State for profile image

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result); // Save the image as a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      const allUsers = JSON.parse(localStorage.getItem('users')) || {};
      const user = allUsers[username];

      if (user && user.password === password) {
        login(username);
        navigate('/');
      } else {
        setError('Invalid username or password');
      }
    } else {
      setError('Both fields are required');
    }
  };

  const handleRegister = () => {
    if (username.trim() && password.trim()) {
      const allUsers = JSON.parse(localStorage.getItem('users')) || {};

      if (allUsers[username]) {
        setError('Username already exists');
      } else {
        allUsers[username] = { 
          password, 
          favorites: [], 
          profileImage // Save the uploaded profile image
        };
        localStorage.setItem('users', JSON.stringify(allUsers));

        login(username);
        navigate('/');
      }
    } else {
      setError('Both fields are required');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          {isRegister ? 'Create an Account' : 'Welcome'}
        </h2>
        <input
          type="text"
          placeholder="Enter username"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegister && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Upload Profile Image:</label>
            <div className="flex items-center gap-4">
              <label
                htmlFor="profileImageUpload"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition"
              >
                Choose Image
              </label>
              <input
                id="profileImageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              {profileImage && (
                <img
                  src={profileImage}
                  alt="Profile Preview"
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                />
              )}
            </div>
          </div>
        )}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {isRegister ? (
          <button
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
            onClick={handleRegister}
          >
            Register
          </button>
        ) : (
          <button
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
        <p
          className="text-blue-500 text-sm mt-4 text-center cursor-pointer hover:underline"
          onClick={() => {
            setIsRegister(!isRegister);
            setError('');
          }}
        >
          {isRegister
            ? 'Already have an account? Login'
            : "Don't have an account? Register"}
        </p>
      </div>
    </div>
  );
}

export default Login;