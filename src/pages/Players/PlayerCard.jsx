import PropTypes from "prop-types"
const PlayerCard = ({player}) => {
    return(
        <div className="card bg-transparent shadow-xl">
  <figure><img className="w-56 h-56 object-cover" src={player.image_url
} alt={player.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {player.name}
      <div className="badge bg-[#a16740] text-white">{player.club}</div>
    </h2>
    <p>{player.position}</p>
    <p>{player.
nationality}</p>
    <div className="card-actions justify-end">
      <div className="badge bg-[#ef9b62] text-black font-medium">Rating: {player.overall_rating
}</div> 
      <div className="badge bg-[#a16740] text-black font-semibold">${player.
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