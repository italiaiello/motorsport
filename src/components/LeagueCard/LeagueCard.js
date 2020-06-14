import React from 'react'

const LeagueCard = ({ league }) => {
    return (
        <article className="leagueCard">
            <p>{league.strLeague}</p>
        </article>
    )
}

export default LeagueCard