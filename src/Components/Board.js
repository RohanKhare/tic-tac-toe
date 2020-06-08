import React from 'react';
import Square from './Square'

class Board extends React.Component{

    constructor(props){
        super(props)
        this.state={
            Square : Array(props.dimension*props.dimension).fill(null),
            dimension : this.props.dimension,
            xIsNext : true,
            counter : 0
          }
          //this.incrementCounter=this.incrementCounter.bind(this)
    }

      renderSqaure(){
        //onClick={()=>this.handleOnClick(i)}
        return <Square value={0} onClick={()=>this.handleOnClick(this.state.counter)}
                 
                 />       
       }
       handleOnClick(i){
         alert("Hello!! " + i)
       }

      //  incrementCounter(){
      //    this.setState((prevState) =>{
      //       counter : prevState.counter + 1
      //    });
      //  }
     
       incrementByRow(cnt){
         let temp = []
         for(let i=0;i<cnt;i++){
           temp.push(this.renderSqaure(this.state.counter));
           //this.incrementCounter();
            //this.setState({counter: this.state.counter+1})
         }
       
       return <div className="board-row">{temp}</div> ;
       }
     
       render(){
        let status = 'Next player : '

         let addBy = []
         for(let j=0;j<this.state.dimension;j++){
           addBy.push(this.incrementByRow(this.state.dimension)); 
           //this.setState(()=>({counter:this.state.counter+1}))
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