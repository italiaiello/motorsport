import React, { useState } from 'react'
import Teams from '../Teams/Teams'
import TeamDetails from '../TeamDetails/TeamDetails'

const DisplayTeams = ({ leagueForTeams, leagueId, route, onRouteChange }) => {

    const [teamId, setTeamId] = useState('')
    console.log(leagueId)

    const onTeamSelect = (e) => {
        setTeamId(e.target.dataset.id)
        onRouteChange('teamDetails')
    }

    return (
        <section id="teamsSection">
            {
                route === 'allTeams' ?
                <Teams leagueForTeams={leagueForTeams} onTeamSelect={onTeamSelect} />
                :
                <TeamDetails leagueId={leagueId} teamId={teamId} />
            }
            
        </section>
    )
}

export default DisplayTeams