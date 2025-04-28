import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

function CountryCard({ country }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('user');
    if (username) {
      const allUsers = JSON.parse(localStorage.getItem('users')) || {};
      const user = allUsers[username];
      if (user?.favorites.includes(country.cca3)) {
        setIsFavorite(true);
      }
    }
  }, [country.cca3]);

  const handleFavoriteToggle = () => {
    const username = localStorage.getItem('user');
    if (!username) return;

    const allUsers = JSON.parse(localStorage.getItem('users')) || {};
    const user = allUsers[username];

    if (isFavorite) {
      user.favorites = user.favorites.filter((code) => code !== country.cca3);
    } else {
      user.favorites.push(country.cca3);
    }

    allUsers[username] = user;
    localStorage.setItem('users', JSON.stringify(allUsers));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <Link to={`/country/${country.cca3}`}>
        {/* Country Flag */}
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-40 object-cover"
        />
        {/* Country Details */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {country.name.common}
          </h2>
          <p className="text-sm text-gray-600">
            <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Region:</strong> {country.region}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
        </div>
      </Link>
      {/* Favorite Button */}
      <div className="p-4 border-t flex justify-between items-center">
        <button
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation when clicking the heart
            handleFavoriteToggle();
          }}
          className="text-2xl focus:outline-none"
        >
          <FaHeart
            className={isFavorite ? 'text-red-500' : 'text-gray-400'}
          />
        </button>
        <Link
          to={`/country/${country.cca3}`}
          className="text-sm text-blue-500 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default CountryCard;