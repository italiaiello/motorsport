import React from 'react'
import { useLeagueDetailsFetch } from '../../hooks/fetchLeagueDetails'

const LeagueDetails = ({ leagueId }) => {
    const [leagueDetails, isLoading] = useLeagueDetailsFetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)
    return (
        <section id="leagueDetailsSection">
            {
                isLoading ?
                <h1>Loading league details...</h1>
                :
                <article id="detailsContainer">
                    <figure className="banner">
                        <img src={leagueDetails.strBanner} />
                    </figure>
                    <h1>{leagueDetails.strLeague}</h1>
                    <p>{leagueDetails.strDescriptionEN}</p>
                </article>
            }
        </section>
    )
}

export default LeagueDetails