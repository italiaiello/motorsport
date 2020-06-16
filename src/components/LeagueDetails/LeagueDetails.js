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
                    <article id="details">
                        <figure className="banner">
                            <img src={leagueDetails.strBanner} alt={`${leagueDetails.strLeague} banner`} />
                        </figure>
                        <h1>{leagueDetails.strLeague}</h1>
                        <p>{leagueDetails.strDescriptionEN}</p>
                    </article>
                    <footer>
                        <a href={`${leagueDetails.strWebsite}`} target="_blank"><button>Website</button></a>
                        <a href={`${leagueDetails.strWebsite}`}><button>Facebook</button></a>
                    </footer>
                </article>
            }
        </section>
    )
}

export default LeagueDetails