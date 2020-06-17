import React, { useState } from 'react'
import { useLeagueFetch } from '../../hooks/fetchLeagues'
import DisplayLeagues from '../DisplayLeagues/DisplayLeagues'
import LeagueDetails from '../LeagueDetails/LeagueDetails'
import Teams from '../Teams/Teams'

const MainPage = () => {

    // Fetches all the motorsport leagues
    const [leagues, isLoading] = useLeagueFetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
    
    // State
    const [route, setRoute] = useState('home')
    const [leagueId, setLeagueId] = useState(0)

    const onLeagueSelect = (e) => {
        const id = e.target.dataset.id
        setLeagueId(parseInt(leagues[id].idLeague))
        onRouteChange('leagueDetails')
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
                                onLeagueSelect={onLeagueSelect}
                                onRouteChange={onRouteChange}
                    />
                    :
                    (
                        route === 'leagueDetails' ?
                        <LeagueDetails leagueId={leagueId} onRouteChange={onRouteChange} />
                        :
                        <Teams />

                    )

                )
                
            }
        </article>
    )
}

export default MainPage