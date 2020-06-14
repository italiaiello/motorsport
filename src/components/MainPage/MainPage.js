import React, { useState } from 'react'
import DisplayLeagues from '../DisplayLeagues/DisplayLeagues'

const MainPage = ({ leagues }) => {

    // State
    const [teams, setTeams] = useState([])

    const onLeagueSelect = (league) => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${league}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    return (
        <article>
            <DisplayLeagues leagues={leagues} />
        </article>
    )
}

export default MainPage