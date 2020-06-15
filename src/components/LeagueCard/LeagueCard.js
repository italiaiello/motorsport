import React from 'react'

const LeagueCard = ({ league, onLeagueSelect }) => {
    return (
        <article className="leagueCard" onClick={onLeagueSelect}>
            <p>{league.strLeague}</p>
        </article>
    )
}

export default LeagueCard