import React, { useEffect, useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaSignOutAlt } from 'react-icons/fa';

function Profile() {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem('users')) || {};
    const currentUser = allUsers[user.username];
    if (currentUser) {
      setFavorites(currentUser.favorites || []);
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Backward Navigation */}
        <button
          onClick={() => navigate(-1)} // Navigate to the previous page
          className="mb-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Welcome, {user?.username}!
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-700 mb-4">
            <strong>Favorites:</strong> {favorites.length} countries
          </p>
          <button
            className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Your Favorite Countries
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {favorites.length > 0 ? (
            favorites.map((countryCode) => (
              <div
                key={countryCode}
                className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-md flex items-center justify-between"
              >
                <span className="text-lg font-medium text-gray-800">
                  {countryCode}
                </span>
                <FaHeart className="text-red-500 text-xl" />
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No favorite countries added yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;