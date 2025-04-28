import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaHeart, FaUserCircle } from 'react-icons/fa';
import React from 'react';

function Header({ onToggleFavorites }) {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [showFavorites, setShowFavorites] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleFavoritesClick = () => {
    const newState = !showFavorites;
    setShowFavorites(newState);
    onToggleFavorites(newState);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to the Profile page
  };

  return (
    <header className="bg-gradient-to-r from-blue-100 to-blue-300 text-gray-800 p-4 shadow-md flex justify-between items-center">
      {/* Left Section: Favorites Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleFavoritesClick}
          className={`flex items-center gap-2 px-4 py-2 rounded ${
            showFavorites ? 'bg-blue-200' : 'bg-blue-50'
          } hover:opacity-90`}
        >
          <FaHeart className="text-xl text-red-500" />
          {showFavorites ? 'Show All Countries' : 'View Favorites'}
        </button>
      </div>

      {/* Center Section: Title */}
      <h1 className="text-3xl font-bold tracking-wide text-blue-600">🌍 Country Explorer</h1>

      {/* Right Section: User Menu */}
      <div className="relative">
        {user ? (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaUserCircle className="text-3xl text-blue-600" />
            <span className="text-lg font-medium">{user.username}</span>
          </div>
        ) : null}

        {showMenu && (
          <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-48">
            <ul className="py-2">
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleProfileClick} // Navigate to Profile
              >
                Profile
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;