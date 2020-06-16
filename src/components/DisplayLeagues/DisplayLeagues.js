import React, { useState } from 'react'
import LeagueCard from '../LeagueCard/LeagueCard'
import SearchBar from '../SearchBar/SearchBar'

const DisplayLeagues = ({ leagues, onLeagueSelect, onRouteChange }) => {

    const [filteredLeagues, setFilteredLeagues] = useState(leagues)

    const onSearchChange = e => {
        const filteredData = leagues.filter(league => league.strLeague.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredLeagues(filteredData)
    }

    return (
        <section id="home">
            <h1>Motorsport Leagues</h1>
            <SearchBar onSearchChange={onSearchChange} />
            <article id="allLeagues">
                {
                    filteredLeagues.map((league, i) => (
                        <LeagueCard key={i}
                                    id={i}
                                    league={league} 
                                    onLeagueSelect={onLeagueSelect}
                        />
                    ))
                }
            </article>
            
        </section>
    )
}

export default DisplayLeagues