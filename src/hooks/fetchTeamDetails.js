import { useState, useEffect } from 'react'


export const useTeamDetailsFetch = (url) => {
    const [teamDetails, setTeamDetails] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        console.log('hello')
        setIsLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTeamDetails(data.teams)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

    }, [url])

    console.log(teamDetails)

    return [teamDetails, isLoading]
}