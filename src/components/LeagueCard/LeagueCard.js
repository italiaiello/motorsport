import React from 'react'

const LeagueCard = ({ league, onLeagueSelect, id }) => {
    return (
        <article className="leagueCard" data-id={id} onClick={onLeagueSelect}>
            <p data-id={id}>{league.strLeague}</p>
        </article>
    )
}

export default LeagueCard