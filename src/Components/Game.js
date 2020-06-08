import React from 'react';
import Board from './Board'
import Square from './Square'

class Game extends React.Component{
    constructor(props){
      super(props)
      
    }
  
    render(){
      return(
        <div className="game"> 
          <div className="game-board">
              <Board dimension={7} />
          </div>
          <div className="game-info">
            <div></div>
            <div></div>
          </div>
        </div>
      )
     }
  
    
  }
  
  export default Game;