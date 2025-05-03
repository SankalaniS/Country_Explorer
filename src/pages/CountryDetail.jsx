import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCountryByCode } from '../services/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import Header from '../components/Header'; // Import the Header component
import React from 'react';

function CountryDetail() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryByCode(code);
        setCountry(res[0]); // API returns an array
      } catch (err) {
        console.error('Error loading country:', err);
      }
    };
    fetchData();
  }, [code]);

  useEffect(() => {
    const username = localStorage.getItem('user');
    if (username) {
      const allUsers = JSON.parse(localStorage.getItem('users')) || {};
      setUser(allUsers[username]);
    }
  }, []);

  const handleFavoriteToggle = () => {
    const username = localStorage.getItem('user');
    if (!username) return;

    const allUsers = JSON.parse(localStorage.getItem('users')) || {};
    const user = allUsers[username];

    if (user.favorites.includes(country.cca3)) {
      user.favorites = user.favorites.filter((code) => code !== country.cca3);
    } else {
      user.favorites.push(country.cca3);
    }

    allUsers[username] = user;
    localStorage.setItem('users', JSON.stringify(allUsers));
    setUser(user);
  };

  if (!country) {
    return (
      <motion.p
        className="text-center mt-6 text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading country details...
      </motion.p>
    );
  }

  return (
    <div>
      <Header onToggleFavorites={() => {}} /> {/* Add the Header component */}
      <motion.div
        className="max-w-6xl mx-auto p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-block mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          ← Back
        </Link>

        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Left Section: Flag and Details */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={country.flags.svg}
              alt={country.name.common}
              className="w-full rounded-lg shadow-md mb-4"
            />
            <div>
              <h1 className="text-4xl font-bold text-blue-600 mb-4">
                {country.name.common}
              </h1>
              <p className="text-lg text-gray-700">
                <strong>Official Name:</strong> {country.name.official}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Capital:</strong> {country.capital?.[0]}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Region:</strong> {country.region}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Subregion:</strong> {country.subregion}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Population:</strong> {country.population.toLocaleString()}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Languages:</strong>{' '}
                {Object.values(country.languages || {}).join(', ')}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Timezones:</strong> {country.timezones.join(', ')}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Area:</strong> {country.area.toLocaleString()} km²
              </p>
              <p className="text-lg text-gray-700">
                <strong>Currency:</strong>{' '}
                {Object.values(country.currencies || {})
                  .map((c) => c.name)
                  .join(', ')}
              </p>
              <button
                onClick={handleFavoriteToggle}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {user?.favorites.includes(country.cca3)
                  ? 'Remove from Favorites'
                  : 'Add to Favorites'}
              </button>
            </div>
          </motion.div>

          {/* Right Section: Map */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Location on Map
            </h2>
            <MapContainer
              center={country.latlng} // Center the map on the country's coordinates
              zoom={6} // Adjust the zoom level (e.g., 6 for a closer view)
              style={{ height: '500px', width: '100%' }}
              className="rounded-lg shadow-md mb-6"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={country.latlng}>
                <Popup>{country.name.common}</Popup>
              </Marker>
            </MapContainer>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default CountryDetail;