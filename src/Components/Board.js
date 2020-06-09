import React from 'react';
import Square from './Square'

class Board extends React.Component{

    constructor(props){
        super(props)
        this.state={
            squares : Array(props.dimension*props.dimension).fill(null),
            dimension : this.props.dimension,
            xIsNext : true,
            counter : -1
            
          }
          
    }

      renderSqaure(i){
        //
        return <Square value={this.state.squares[i]} onClick={()=>this.handleOnClick(i)}
                 />       
       }
       handleOnClick(i){
         const squares = this.state.squares.slice();
         if(this.calculateWinner(squares) || squares[i]){
           return;
         }
         squares[i] = (this.state.xIsNext ? 'X' : 'O')
         this.setState({
          squares : squares,
          xIsNext : !this.state.xIsNext
         });
       }
             
        incrementByRow(cnt, counter){
          let temp = []          
          for(let i=0;i<cnt;i++){
            temp.push(this.renderSqaure(counter));
            counter = counter +1
          }
          return <div className="board-row">{temp}</div> ;
        }
     
       render(){
        const winner = this.calculateWinner(this.state.squares);
         let status;
        if(winner){
          status = 'Winner : ' +winner;
        }else {
          status = 'Next player : '+ (this.state.xIsNext ? 'X' : 'O');
        }
        let counter = 0;
         let addBy = []
         for(let j=0;j<this.state.dimension;j++){
           addBy.push(this.incrementByRow(this.state.dimension,counter));
           counter = counter + this.state.dimension;
         }
         
         return (
           <div>
             <div>{status}</div>
             <div className="board-rows">
               {addBy}
             </div>
           </div>
         );
       }


       calculateWinner(squares){
          if(this.state.dimension === 3){
            const lines=[
              [0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6]
            ];

            for(let i=0; i<lines.length;i++){
              const [a, b, c] = lines[i];
              if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
                return squares[a];
              }
            }
            return null;
          }

          if(this.state.dimension === 5){
            const lines=[
              [0,1,2,3,4],
              [5,6,7,8,9],
              [10,11,12,13,14],
              [15,16,17,18,19],
              [20,21,22,23,24],
              [0,5,10,15,20],
              [1,6,11,16,21],
              [2,7,12,17,22],
              [3,8,13,18,23],
              [4,9,14,19,24],
              [0,6,12,18,24],
              [4,8,12,16,20]
            ];

            for(let i=0; i<lines.length;i++){
              const [a, b, c, d, e] = lines[i];
              if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c] && squares[a]===squares[d] && squares[a]===squares[e]){
                return squares[a];
              }
            }
            return null;
          }
          if(this.state.dimension === 7){
            const lines=[
              [0, 1, 2, 3, 4, 5, 6],
              [7, 8, 9, 10,11,12,13],
              [14,15,16,17,18,19,20],
              [21,22,23,24,25,26,27],
              [28,29,30,31,32,33,34],
              [35,36,37,38,39,40,41],
              [42,43,44,45,46,47,48],

              [0,7,14,21,28,35,42],
              [1,8,15,22,29,36,43],
              [2,9,16,23,30,37,44],
              [3,10,17,24,31,38,45],
              [4,11,18,25,32,39,46],
              [5,12,19,26,33,40,47],
              [6,13,20,27,34,41,48],
              
              [0,8,16,24,32,40,48],
              [6,12,28,24,30,36,42]
            ];

            for(let i=0; i<lines.length;i++){
              const [a, b, c, d, e, f, g] = lines[i];
              if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c] && squares[a]===squares[d] && squares[a]===squares[e] && squares[a]===squares[f] && squares[a]===squares[g]){
                return squares[a];
              }
            }
            return null;
          }
       }
}
export default Board;