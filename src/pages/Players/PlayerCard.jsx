import PropTypes from "prop-types"
const PlayerCard = ({player}) => {
    return(
        <div className="card bg-transparent shadow-xl">
  <figure><img className="w-56 h-56 object-cover" src={player.image_url
} alt={player.name} /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">
     {player.name}
      <div className="badge bg-gradient-to-r from-sky-500 to-indigo-500 border-none text-white">{player.club}</div>
    </h2>
    <p className="text-white">{player.position}</p>
    <p className="text-white">{player.
nationality}</p>
    <div className="card-actions justify-end">
      <div className="badge bg-gradient-to-r from-sky-500 to-indigo-500 border-none text-white font-medium">Rating: {player.overall_rating
}</div> 
      <div className="badge bg-gradient-to-r from-sky-500 to-indigo-500 text-white border-none font-semibold">${player.
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