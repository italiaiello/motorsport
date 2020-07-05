import React, { useState } from 'react';
import MainPage from './components/MainPage/MainPage'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'

import './App.css';

function App() {

  const [route, setRoute] = useState('signin')

  const onRouteChange = newRoute => {
      setRoute(newRoute)
  }

  return (
    <div className="App">
        {
          route === 'signin' ?
          <SignIn onRouteChange={onRouteChange} />
          :
          (
            route === 'register' ?
            <Register onRouteChange={onRouteChange} /> 
            :
            <MainPage route={route} onRouteChange={onRouteChange} />

          )
        }
        
    </div>
  );
}

export default App;
