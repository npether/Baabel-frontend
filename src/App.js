import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ForceDirectedGraph from './components/ForceDirectedGraph/ForceDirectedGraph';
import Game from './components/TicTacToeBoard/TicTacToeBoard';

  let nodes = [
    { id: "A", x: 5, y: 5, r: 5, fill: "red" },
    {id: "A", x: 40, y: 40, r: 20, fill: "blue" },
  ];
  let links = [
    { source : nodes[0], target : nodes[1] },
  ];

  let data = {"nodes": nodes, "links": links};

class App extends Component {
  // getInitialState() {
  //   return {
  //     nodes: [],
  //     links: [],
  //   };
  // },

  // componentDidMount() {
  //   this.updateData();
  // },

  // updateData() {
  //   // randomData is loaded in from external file generate_data.js
  //   // and returns an object with nodes and links
  //   var newState = randomData(this.state.nodes, width, height);
  //   this.setState(newState);
  // },

 



  render() {
    let txt = this.props.txt;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello! Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Game/>


      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string
}

// <ForceDirectedGraph data={data} /> add this above but i'm filling in the tictactoe game first instead to learn the ropes

//i'm going to set prop data as .isRequired

export default App;
