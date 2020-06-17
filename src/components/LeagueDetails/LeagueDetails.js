import React from 'react'
import { useLeagueDetailsFetch } from '../../hooks/fetchLeagueDetails'
import WebsiteLogo from '../../images/icons/globe.svg'
import FacebookLogo from '../../images/icons/facebook.svg'
import TwitterLogo from '../../images/icons/twitter.svg'
import YouTubeLogo from '../../images/icons/youtube.svg'


const LeagueDetails = ({ leagueId, onRouteChange }) => {
    const [leagueDetails, isLoading] = useLeagueDetailsFetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`)

    // Helps to format the date of first event
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    return (
        <section id="leagueDetailsSection">
            {
                isLoading ?
                <h1>Loading league details...</h1>
                :
                <article id="detailsContainer">
                    <figure className="banner">
                        <img src={leagueDetails.strBanner} alt={`${leagueDetails.strLeague} banner`} />
                    </figure>
                    <article className="heading">
                        <button onClick={() => onRouteChange('home')}>Back</button>
                        <h2>{leagueDetails.strLeague}</h2>
                    </article>
                    
                    <article id="leagueDetails">
                        <article id="shortInfo">
                            <article>
                                <h3>Year Formed</h3>
                                <p>{leagueDetails.intFormedYear}</p>
                            </article>
                            <article>
                                <h3>Date of First Event</h3>
                                <p>{new Date(`${leagueDetails.dateFirstEvent}`).toLocaleDateString("en-US", options)}</p>
                            </article>
                            <article>
                                <h3>Gender</h3>
                                <p>{leagueDetails.strGender}</p>
                            </article>
                            <article>
                                <h3>Country</h3>
                                <p>{leagueDetails.strCountry}</p>
                            </article>
                        </article>
                        <p>{leagueDetails.strDescriptionEN}</p>
                    </article>
                    <button id="showTeams" onClick={() => onRouteChange('allTeams')}>See All Teams</button>
                    <footer>
                        {
                            leagueDetails.strWebsite !== "" &&
                            <a href={`https://${leagueDetails.strWebsite}`} rel="noopener noreferrer" target="_blank">
                                <figure>
                                    <img src={WebsiteLogo} alt="Globe icon"/>
                                </figure>
                            </a>
                        }

                        {
                            leagueDetails.strFacebook !== "" &&
                            <a href={`https://${leagueDetails.strFacebook}`} rel="noopener noreferrer" target="_blank">
                                <figure>
                                    <img src={FacebookLogo} alt="Facebook icon"/>
                                </figure>
                            </a>
                        }
                        {
                            leagueDetails.strTwitter !== "" &&
                            <a href={`https://${leagueDetails.strTwitter}`} rel="noopener noreferrer" target="_blank">
                                <figure>
                                    <img src={TwitterLogo} alt="Twitter icon"/>
                                </figure>
                            </a>
                        }
                        {
                            leagueDetails.strYoutube !== "" &&
                            <a href={`https://${leagueDetails.strYoutube}`} rel="noopener noreferrer" target="_blank">
                                <figure>
                                    <img src={YouTubeLogo} alt="YouTube icon"/>
                                </figure>
                            </a>
                        }
                    </footer>
                </article>
            }
        </section>
    )
}

export default LeagueDetails