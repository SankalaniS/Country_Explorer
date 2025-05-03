<<<<<<< HEAD
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  return response.data;
};

export const getCountryByName = async (name) => {
  const response = await axios.get(`${BASE_URL}/name/${name}`);
  return response.data;
};

export const getCountriesByRegion = async (region) => {
  const response = await axios.get(`${BASE_URL}/region/${region}`);
  return response.data;
};

export const getCountryByCode = async (code) => {
  const response = await axios.get(`${BASE_URL}/alpha/${code}`);
  return response.data;
};
=======
const BASE_URL = 'https://restcountries.com/v3.1'

export const getAllCountries = async () => {
  const res = await fetch(`${BASE_URL}/all`)
  return res.json()
}

export const getCountryByName = async (name) => {
  const res = await fetch(`${BASE_URL}/name/${name}`)
  return res.json()
}

export const getCountriesByRegion = async (region) => {
  const res = await fetch(`${BASE_URL}/region/${region}`)
  return res.json()
}

export const getCountryByCode = async (code) => {
  const res = await fetch(`${BASE_URL}/alpha/${code}`)
  return res.json()
}
>>>>>>> baaabb977c03ce9cc7acc6db4b1a085b929cdd55
