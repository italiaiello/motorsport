import React, { useState } from 'react'
import DisplayLeagues from '../DisplayLeagues/DisplayLeagues'

const MainPage = ({ leagues }) => {

    // State
    const [teams, setTeams] = useState([])

    const onLeagueSelect = (league) => {

    }

    return (
        <article>
            <DisplayLeagues leagues={leagues} />
        </article>
    )
}

export default MainPage