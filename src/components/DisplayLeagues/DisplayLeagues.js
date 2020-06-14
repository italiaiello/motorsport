import React from 'react'
import LeagueCard from '../LeagueCard/LeagueCard'

const DisplayLeagues = ({ leagues, setTeams }) => {
    return (
        <section id="home">
            <h1>Motorsport Leagues</h1>
            <article id="allLeagues">
                {
                    leagues.map((league, i) => (
                        <LeagueCard key={i} league={league} setTeams={setTeams} />
                    ))
                }
            </article>
            
        </section>
    )
}

export default DisplayLeagues