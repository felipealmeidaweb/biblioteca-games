
import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import Usegame from "./hooks/UseGame";

export default function App(){
  const{games,addGame,removeGame} = Usegame()
  
  return(
    <div>
      <h1> Biblioteca de jogos </h1>
      <NewGameForm addGame={addGame}/>
  
      <div className="games"> 
      {games.map((game)=>(
          <Game key={game.id}
          title={game.title}
          cover={game.cover}
          OnRemove={()=> removeGame(game.id)}
          />
      ))}
      </div>
    </div>
  )
}