import PropTypes from "prop-types"
const PlayerCard = ({player}) => {
    return(
        <div className="card bg-transparent shadow-xl">
  <figure><img className="w-64 h-64 object-cover" src={player.image_url
} alt={player.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {player.name}
      <div className="badge badge-secondary">{player.club}</div>
    </h2>
    <p>{player.position}</p>
    <p>{player.
nationality}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-success">{player.overall_rating
}</div> 
      <div className="badge badge-primary">{player.
season_contract_price
}</div>
    </div>
  </div>
</div>
    )}

PlayerCard.propTypes = {
    player:PropTypes.object
}    
export default PlayerCard;