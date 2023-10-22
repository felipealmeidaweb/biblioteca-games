


import PropTypes from "prop-types"


export default function Game ({title,cover,OnRemove}){
    return(
        <div>
          <img src={cover} alt="" />
          <div>
            <h2>{title}</h2>
            <button onClick={OnRemove}> Remover jogo</button>
          </div>
        </div>
    )

}
Game.propTypes={
  title: PropTypes.string,
  cover: PropTypes.string,
  OnRemove: PropTypes.func
}