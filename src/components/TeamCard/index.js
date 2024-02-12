// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {item} = props
  return (
    <Link className="link" to={`/team-matches/${item.id}`}>
      <li className="list-items">
        <img className="team-img" alt={item.name} src={item.teamImageUrl} />
        <p className="team-name">{item.name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
