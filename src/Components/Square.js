import React from 'react';
import './Game.css'

// class Square extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: null,
//         counter : 0
//       };
//     }
    
//     incrementCounter(){
//       this.setState((prevState)=>({
//       counter : prevState + 1
//     }),
//     ()=>{
//       console.log("Counter : "+this.state.counter)
//     })
//   }

//     render() {
//       return (
//         <button
//           className="square"
//           onClick={() => this.props.handleOnClick(this.state.counter)}
//         >
//           {this.state.value}
//         </button>
//       );
//     }
//   }

function Square(props) {
  return (
    <button className="square" onClick={()=>props.onClick(props.value)}>
      {props.value}
    </button>
  );
}
  export default Square;