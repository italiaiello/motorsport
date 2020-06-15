import React, { useState } from 'react'
import { useLeagueFetch } from '../../hooks/displayLeagues'
import DisplayLeagues from '../DisplayLeagues/DisplayLeagues'

const MainPage = () => {

    // Fetches all the motorsport leagues
    const [leagues, isLoading] = useLeagueFetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')

    // State
    const [route, setRoute] = useState('home')

    const onLeagueSelect = (league) => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${league}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    const onRouteChange = (newRoute) => {
        setRoute(newRoute)
    }

    return (
        <article>
            {
                isLoading 
                ?
                <h1>Loading motorsport leagues...</h1>
                :
                (
                    route === 'home' ?
                    <DisplayLeagues leagues={leagues} 
                                onRouteChange={onRouteChange} 
                                onLeagueSelect={onLeagueSelect}
                    />
                    :
                    (
                        route === 'leagueDetails' &&
                        <h1>League Details</h1>

                    )

                )
                
            }
        </article>
    )
}

export default MainPage