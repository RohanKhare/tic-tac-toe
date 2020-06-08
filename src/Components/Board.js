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
        return <Square value={this.state.squares[i]} onClick={()=>this.handleOnClick(i)}
                 />       
       }
       handleOnClick(i){
         //alert("Hello!! " + i)
         const squares = this.state.squares.slice();
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
        let status = 'Next player : '+ (this.state.xIsNext ? 'X' : 'O')
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
}
export default Board;