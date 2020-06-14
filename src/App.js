import React, { useState } from 'react';
import { useLeagueFetch } from './hooks/displayLeagues'
import MainPage from './components/MainPage/MainPage'

import './App.css';

function App() {

  // Fetches all the motorsport leagues
  const [leagues, isLoading] = useLeagueFetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')

  return (
    <div className="App">
      {
        isLoading ?
        <h1>Loading Motorsport Leagues...</h1>
        :
        <MainPage leagues={leagues} />
      }
    </div>
  );
}

export default App;
