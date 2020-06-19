import { useEffect, useState } from 'react'

export const useTeamsFetch = (url) => {
    const [teams, setTeams] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTeams(data.teams)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [url])

    return [teams, isLoading]
}