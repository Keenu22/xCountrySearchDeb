// src/App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';
import { api } from './components/api';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await api();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    loadCountries();
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, countries]);

  return (
    <div className="app">
      <SearchBar query={searchQuery} onSearch={setSearchQuery} />
      <CountryList countries={filteredCountries} />
    </div>
  );
};

export default App;
