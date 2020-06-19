import React from 'react'
import { useTeamDetailsFetch } from '../../hooks/fetchTeamDetails'

const TeamDetails = ({ leagueId, teamId }) => {

    const [teamDetails, isLoading] = useTeamDetailsFetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${leagueId}`)

    return (
        <section>
            {
                isLoading ?
                <h1>Loading team details...</h1>
                :
                <article>
                    <figure>
                        {
                            console.log(teamDetails)
                        }
                        <img src={teamDetails[teamId].strTeamBanner} alt={`${teamDetails[teamId].strTeam}'s banner`} />
                    </figure>
                    <h2>{teamDetails[teamId].strTeam}</h2>
                    <h3>Description</h3>
                    <p>{teamDetails[teamId].strDescriptionEN}</p>
                </article>
            }
            
        </section>
    )
}

export default TeamDetails