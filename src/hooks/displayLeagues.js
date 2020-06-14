import { useState, useEffect } from 'react'


export const useLeagueFetch = (url) => {
    const [leagues, setLeagues] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLeagues(data.leagues.filter(league => league.strSport === 'Motorsport' && league.strLeague !== '_Defunct Motorsport Teams'))
                setIsLoading(false)
            })
            .catch(err => console.log(err))
        
    }, [url])

    return [leagues, isLoading]
}