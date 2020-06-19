import { useState, useEffect } from 'react'


export const useLeagueDetailsFetch = (url) => {
    const [leagueDetails, setLeagueDetails] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLeagueDetails(data.leagues[0])
                setIsLoading(false)
            })
            .catch(err => console.log(err))
        
    }, [url])

    return [leagueDetails, isLoading]
}