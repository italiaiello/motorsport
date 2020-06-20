import React from 'react';
import MainPage from './components/MainPage/MainPage'
import { useTeamDetailsFetch } from './hooks/fetchTeamDetails'

import './App.css';

function App() {

  const [teamDetails, isLoading] = useTeamDetailsFetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4373`)

  return (
    <div className="App">
        <MainPage />
    </div>
  );
}

export default App;
