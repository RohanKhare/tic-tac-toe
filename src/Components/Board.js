import React from 'react';
import Square from './Square'

class Board extends React.Component{

    constructor(props){
        super(props)
        this.state={
            squares : Array(props.dimension*props.dimension).fill(null),
            dimension : this.props.dimension,
            xIsNext : true,            
          }
          
    }

      renderSqaure(i){
        //this.state.squares[i]
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
             
        incrementRow(limit, counter){
          let temp = []          
          for(let i=0;i<limit;i++){
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
         let squareBoard = []
         for(let j=0;j<this.state.dimension;j++){
          squareBoard.push(this.incrementRow(this.state.dimension,counter));
           counter = counter + this.state.dimension;
         }
         
         return (
           <div>
             <div>{status}</div>
             <div className="board-rows">
               {squareBoard}
             </div>
           </div>
         );
       }

       callVarticalArray(){
        
        let temp =[];
        let counter = 0;
        let verticalArray = [];
        
          for(let i=0; i< this.state.dimension;i++){

            for(let j=i;j<this.state.dimension*this.state.dimension;j+=this.state.dimension){

                  if(counter < this.state.dimension){
                    temp[counter] = j;
                    counter+=1;
                  }

                  if(counter === this.state.dimension){
                    verticalArray.push(temp);
                    temp=[];
                    counter=0;
                    break;
                  }
              }
          
          }

          return verticalArray;
       }
       callHorizontalArray(){
        let temp = [];
        let count = 0;
        let horizontalArray = [];
        for(let i=0;i<this.state.dimension*this.state.dimension;i++){
          
            if(count<this.state.dimension){
              temp[count] = i;
              count+=1;
            }

            if(count===this.state.dimension){
              horizontalArray.push(temp);
              temp = [];
              count = 0; 
            }
        }
        return horizontalArray;
       }
       callLeftDiagonalArray(){

        let temp=[];
        let counter = 0;
        let leftDiagonalArray =[];

        for(let i=0;i<this.state.dimension*this.state.dimension;i+=(this.state.dimension+1)){

            if(counter<this.state.dimension){
              temp[counter]=i;
              counter+=1;
            }

            if(counter === this.state.dimension){
              leftDiagonalArray.push(temp);
              temp = [];
              counter=0;
              break;
            }
        }
        return leftDiagonalArray;
       }
       callRightDigonalArray(){

        let temp =[];
        let counter=0;
        let rightDiagonalArray=[];

        for(  let i=this.state.dimension-1; i< this.state.dimension*this.state.dimension;i+=(this.state.dimension-1)){
          if(counter<this.state.dimension){
            temp[counter] = i;
            counter+=1;
          }
          if(counter === this.state.dimension){
            rightDiagonalArray.push(temp);
            temp = [];
            counter=0;
            break;  
          }   
        }
        return rightDiagonalArray;
       }
       
       
       comparisonArray(){

        const lineArray = [];

        let horizontalArray = this.callHorizontalArray();
        let verticalArray = this.callVarticalArray();
        let leftDiagonalArray = this.callLeftDiagonalArray();
        let rightDiagonalArray = this.callRightDigonalArray();


        //for loop for adding horizontal lines
        for(let i=0;i<this.state.dimension;i++){
            lineArray.push(horizontalArray[i]);
        }


        //for loop for adding vertical lines
        for(let i=0;i<this.state.dimension;i++){
          lineArray.push(verticalArray[i]);
        }

        //for loop for adding left diagonal lines
        for(let i=0;i<1;i++){
          lineArray.push(leftDiagonalArray[i]);
        }

        //for loop for adding right diagonal lines
        for(let i=0;i<1;i++){
          lineArray.push(rightDiagonalArray[i]);
        }        
        return lineArray;
       }

      calculateWinner(squares){
        const lines = this.comparisonArray();
        //console.log(lines)
          for(let i=0; i<lines.length;i++){
            const[a, b, c] = lines[i];
            console.log([a, b, c]);
            if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
              return squares[a];
            }
          }
          return null;
        }

       
}
export default Board;



//   HARDCODED Comparison for 3/5/7 dimension

 //  calculateWinner(squares){
      //     if(this.state.dimension === 3){
      //       const lines=[
      //         [0,1,2],
      //         [3,4,5],
      //         [6,7,8],
      //         [0,3,6],
      //         [1,4,7],
      //         [2,5,8],
      //         [0,4,8],
      //         [2,4,6]
      //       ];

      //       for(let i=0; i<lines.length;i++){
      //         const [a, b, c] = lines[i];
      //         if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
      //           return squares[a];
      //         }
      //       }
      //       return null;
      //     }

      //     if(this.state.dimension === 5){
      //       const lines=[
      //         [0,1,2,3,4],
      //         [5,6,7,8,9],
      //         [10,11,12,13,14],
      //         [15,16,17,18,19],
      //         [20,21,22,23,24],
      //         [0,5,10,15,20],
      //         [1,6,11,16,21],
      //         [2,7,12,17,22],
      //         [3,8,13,18,23],
      //         [4,9,14,19,24],
      //         [0,6,12,18,24],
      //         [4,8,12,16,20]
      //       ];

      //       for(let i=0; i<lines.length;i++){
      //         const [a, b, c, d, e] = lines[i];
      //         if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c] && squares[a]===squares[d] && squares[a]===squares[e]){
      //           return squares[a];
      //         }
      //       }
      //       return null;
      //     }
      //     if(this.state.dimension === 7){
      //       const lines=[
      //         [0, 1, 2, 3, 4, 5, 6],
      //         [7, 8, 9, 10,11,12,13],
      //         [14,15,16,17,18,19,20],
      //         [21,22,23,24,25,26,27],
      //         [28,29,30,31,32,33,34],
      //         [35,36,37,38,39,40,41],
      //         [42,43,44,45,46,47,48],

      //         [0,7,14,21,28,35,42],
      //         [1,8,15,22,29,36,43],
      //         [2,9,16,23,30,37,44],
      //         [3,10,17,24,31,38,45],
      //         [4,11,18,25,32,39,46],
      //         [5,12,19,26,33,40,47],
      //         [6,13,20,27,34,41,48],
              
      //         [0,8,16,24,32,40,48],
      //         [6,12,28,24,30,36,42]
      //       ];

      //       for(let i=0; i<lines.length;i++){
      //         const [a, b, c, d, e, f, g] = lines[i];
      //         if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c] && squares[a]===squares[d] && squares[a]===squares[e] && squares[a]===squares[f] && squares[a]===squares[g]){
      //           return squares[a];
      //         }
      //       }
      //       return null;
      //     }
      //  }