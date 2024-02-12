// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  return (
    <li className="recent-items">
      <div>
        <img
          className="recent-img"
          alt={`competing team ${details.competingTeam}`}
          src={details.competingTeamLogo}
        />
        <p className="recent-heading">{details.competingTeam}</p>
      </div>
      <div>
        <p className="recent-result">{details.result}</p>
        <p className={`recent-status ${details.matchStatus}`}>
          {details.matchStatus}
        </p>
      </div>
    </li>
  )
}

export default MatchCard
