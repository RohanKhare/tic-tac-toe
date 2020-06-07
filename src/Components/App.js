import React from 'react';
import './App.css';
import Square from './Component/Square';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      final :[],
      dimension : 5,
      xIsNext : true,
      counter : 0,
      
    }
  }

  renderSqaure(){
   return <Square 
            oncClick={()=>this.handleOnClick(this.state.counter)}
            />       
  }
  handleOnClick(i){
    alert("Hello!!")
  }

  incrementByRow(cnt){
    let temp = []
    for(let i=0;i<cnt;i++){
     console.log("incrementByFive");
      temp.push(this.renderSqaure())
    }
  //   this.setState((prevState)=>({
  //     counter : prevState + cnt
  // })) 
  return <div className="board-row">{temp}</div> ;
  }

  render(){
    let addBy = []
    for(let j=0;j<this.state.dimension;j++){
      addBy.push(this.incrementByRow(this.state.dimension)); 
      this.setState(()=>({counter:counter+1}))
    }

    
    return (
      <div>
        <div className="Test">
          {addBy}
        </div>
      </div>
    );
  }

  
}

export default App;

{/* <header className="App-header">
<a>Helloo World!</a>
</header> */}
 {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}