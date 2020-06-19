import { useState, useEffect } from 'react'


export const useTeamDetailsFetch = (url) => {
    const [teamDetails, setTeamDetails] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTeamDetails(data.teams)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
        
    }, [url])

    return [teamDetails, isLoading]
}