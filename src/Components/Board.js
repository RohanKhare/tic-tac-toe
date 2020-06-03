import React from 'react';
import Square from './Square';

  class Board extends React.Component {
        renderSquare(i) {
            return(
                <Square value={this.props.squares[i]} 
                        onClick={()=> this.props.onClick(i)} 
                />
            );
        }

        render() {
        
            return (
                <div>
               
                <div className="board-row">            
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">            
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">            
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                </div>
            );
        }
  }


  export default Board;




   //   constructor(props){
    //         super(props);
    //         this.state={
    //             history :[
    //                 //before move
    //                 {squares:[
    //                     null,null,null,
    //                     null,null,null,
    //                     null,null,null,
    //                 ]},
    //                 //after first move
    //                 {squares:[
    //                     null,null,null,
    //                     null,null,null,
    //                     null,null,null,
    //                 ]},
                    
    //                 //seond move
    //                 {squares:[
    //                     null,null,null,
    //                     null,null,null,
    //                     null,null,null,
    //                 ]},
                    
    //                 //third move
    //                 {squares:[
    //                     null,null,null,
    //                     null,null,null,
    //                     null,null,null,
    //                 ]},
                    
    //                 //fourth move
    //                 {squares:[
    //                     null,null,null,
    //                     null,null,null,
    //                     null,null,null,
    //                 ]},
                    
    //                 //fifth move
    //                 {squares:[
    //                     null,null,null,
    //                     null,null,null,
    //                     null,null,null,
    //                 ]},
                    
    //                 //sixth move
    //                 {squares:[
    //                     null,null,null,
    //                     null,null,null,
    //                     null,null,null,
    //                 ]},
                    
    //                 //seventh move
    //                 {squares:[
    //                     null,null,null,
    //                     null,null,null,
    //                     null,null,null,
    //                 ]},
                    
    //                 //eighth move
    //                 {squares:[
    //                     null,null,null,
    //                     null,null,null,
    //                     null,null,null,
    //                 ]},
                    
    //                 //nineth move
    //                 {squares:[
    //                     null,null,null,
    //                     null,null,null,
    //                     null,null,null,
    //                 ]},
                    
    //             ],
    //         };
    //     }