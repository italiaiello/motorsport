import React, { useState, useEffect } from 'react'
import { useLeagueFetch } from '../../hooks/fetchLeagues'
import DisplayLeagues from '../DisplayLeagues/DisplayLeagues'
import LeagueDetails from '../LeagueDetails/LeagueDetails'
import DisplayTeams from '../DisplayTeams/DisplayTeams'
import SignIn from '../SignIn/SignIn'
import Register from '../Register/Register'

const MainPage = () => {

    // Fetches all the motorsport leagues
    const [leagues, isLoading] = useLeagueFetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
    
    // State
    const [leagueId, setLeagueId] = useState(0)
    const [leagueForTeams, setLeagueForTeams] = useState('')

    const onLeagueSelect = (e) => {
        const id = e.target.dataset.id
        setLeagueId(parseInt(leagues[id].idLeague))
        setLeagueForTeams(leagues[id].strLeague)
        onRouteChange('leagueDetails')
    }

    const [route, setRoute] = useState('signin')

    const onRouteChange = newRoute => {
        setRoute(newRoute)
    }

    useEffect(() => {
        const token = window.sessionStorage.getItem('token')
        if (token) {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': token
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data && data.id) {
            fetch(`http://localhost:3000/profile/${data.id}`, {
                method: 'get',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': token
                }
            })
            .then(response => response.json())
            .then(user => {
                if (user && user.email) {
                    console.log(user)
                    onRouteChange('home')
                }
            })
            }
        })
        .catch(console.log)
        }
    }, [])

    return (
        <article>
            {
                isLoading 
                ?
                <h1>Loading motorsport leagues...</h1>
                :
                (
                    route === 'signin' ?
                    <SignIn onRouteChange={onRouteChange} />
                    :
                    (
                        route === 'register' ?
                        <Register onRouteChange={onRouteChange} />
                        :route === 'home' ?
                        <DisplayLeagues leagues={leagues} 
                                    onLeagueSelect={onLeagueSelect}
                                    onRouteChange={onRouteChange}
                        />
                        :
                        (
                            route === 'leagueDetails' ?
                            <LeagueDetails leagueId={leagueId} onRouteChange={onRouteChange} />
                            :
                            <DisplayTeams leagueForTeams={leagueForTeams} leagueId={leagueId} route={route} onRouteChange={onRouteChange} />
                        )
                    )
                )
                
            }
        </article>
    )
}

export default MainPage