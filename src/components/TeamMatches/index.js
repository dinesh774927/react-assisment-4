// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    recentMatch: [],
    latestMatchDetails: {},
    teamBannerUrl: '',
    loader: true,
    id: '',
  }

  componentDidMount() {
    this.getDetails()
  }

  changeName = each => ({
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    date: each.date,
    firstInnings: each.first_innings,
    id: each.id,
    manOfTheMatch: each.man_of_the_match,
    matchStatus: each.match_status,
    result: each.result,
    secondInnings: each.second_innings,
    umpires: each.umpires,
    venue: each.venue,
  })

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const newList = {
      recentMatch: data.recent_matches,
      latestMatchDetails: data.latest_match_details,
      teamBannerUrl: data.team_banner_url,
    }

    const {latestMatchDetails, recentMatch, teamBannerUrl} = newList
    const newRecentList = recentMatch.map(each => this.changeName(each))
    const newLatestDetails = this.changeName(latestMatchDetails)
    this.setState({
      recentMatch: newRecentList,
      latestMatchDetails: newLatestDetails,
      teamBannerUrl,
      loader: false,
      id,
    })
  }

  render() {
    const {
      recentMatch,
      latestMatchDetails,
      teamBannerUrl,
      loader,
      id,
    } = this.state
    console.log(recentMatch)
    console.log(latestMatchDetails)
    console.log(id)
    return (
      <div>
        {loader ? (
          <div testid="loader" className="loader-container2">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`${id} team-background`}>
            <img className="banner" alt="team banner" src={teamBannerUrl} />
            <p className="latest-heading">Latest Matches</p>
            <LatestMatch details={latestMatchDetails} />
            <ul className="recent-container">
              {recentMatch.map(each => (
                <MatchCard details={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
