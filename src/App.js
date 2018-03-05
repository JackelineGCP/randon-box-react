import React, { Component } from 'react';
import './App.css';

//hexadecimal colors
//0-9, A B C D E F

let randonColor = ['greenyellow', 'gold', 'red' , 'turquoise',  'royalblue', 'black', 'yellow', 'blue'];
let color = '#' + Math.random().toString(6).slice(2, 8).toUpperCase();


let styleFont = randonColor[Math.floor(Math.random() * 8)];
const stylesBg = { 
  backgroundColor: color
} 

class App extends Component {
  render() {
    return (
      <div className="App flex" style={stylesBg}>
       { <h1 className={styleFont}>Hello I am a colorfull box</h1>}
      </div>
    );
  }
}
export default App;

