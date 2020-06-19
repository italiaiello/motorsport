import React from 'react'
import { useTeamsFetch } from '../../hooks/fetchTeams'

const Teams = ({ leagueForTeams }) => {

    // Spaces have to be replaced by %20 for thr url
    const formattedLeague = leagueForTeams.replace(/\s/g, '%20')

    const [teams, isLoading] = useTeamsFetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${formattedLeague}`)

    return (
        <section className="allTeams">
            <h1>Teams</h1>
            {   
                isLoading 
                ?
                <h2>Loading teams...</h2>
                :
                teams.map((team, i) => (
                    <article key={i} className="optionToSelect">
                        <figure>
                            <img src={team.strTeamBadge} alt={`${team.strTeam}'s Badge`} />
                        </figure>
                        <p>{`${team.strTeam}`}</p>
                    </article>
                ))
            }
        </section>
    )
}

export default Teams