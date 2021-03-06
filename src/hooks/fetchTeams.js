import { useEffect, useState } from 'react'

export const useTeamsFetch = (teamsUrl) => {
    const [teams, setTeams] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        fetch(teamsUrl)
            .then(response => response.json())
            .then(data => {
                setTeams(data.teams)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [teamsUrl])

    return [teams, isLoading]
}