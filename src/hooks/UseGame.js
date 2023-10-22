import { useState } from "react"


export default function Usegame(){
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem("game-lib");
        if (storedGames) {
          const gameArray = JSON.parse(storedGames);
          return gameArray;
        } else {
          return [];
        }
      });
      
      
      const addGame = ({title,cover}) => {
         const id = Math.floor(Math.random() * 100000)
        const game = {id,title,cover}
        setGames(state => {
          const newState =  [...state,game]
          localStorage.setItem("game-lib",JSON.stringify(newState))
          return newState
        })
      }
    
    
        const removeGame = (id) =>{
          setGames(state => {
            const newState = state.filter(game => game.id !== id)
            localStorage.setItem("game-lib", JSON.stringify(newState))
              return newState
            })
        }

        return{games,addGame,removeGame}
}