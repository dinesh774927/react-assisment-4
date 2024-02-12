// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  return (
    <div className="match-details">
      <div className="present-details">
        <div className="details-container">
          <p className="latest-name">{details.competingTeam}</p>
          <p className="latest-date">{details.date}</p>
          <p className="latest-venue">{details.venue}</p>
          <p className="latest-venue">{details.result}</p>
        </div>
        <img
          className="latest-logo"
          alt={`latest match ${details.competingTeam}`}
          src={details.competingTeamLogo}
        />
      </div>
      <div className="innings-container">
        <h1 className="innings-heading">First Innings</h1>
        <p className="innings-names">{details.firstInnings}</p>
        <h1 className="innings-heading">Second Innings</h1>
        <p className="innings-names">{details.secondInnings}</p>
        <h1 className="innings-heading">Man of the Match</h1>
        <p className="innings-names">{details.manOfTheMatch}</p>
        <h1 className="innings-heading">Umpires</h1>
        <p className="innings-names">{details.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
