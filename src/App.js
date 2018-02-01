import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      components : [
       ["one","two","three"],
       ["four","five","six"],
       ["seven","eight", "nine"]
      ],
      adjacents: { 
        "one": ["two","four"],
        "two": ["one","five","three"],
        "three": ["two","six"],
        "four": ["one","five","seven"],
        "five": ["two","four","six","eight"],
        "six": ["three","five","nine"],
        "seven": ["four","eight"],
        "eight": ["seven","five","nine"],
        "nine": ["six","eight"]
      },
      color: "white",
      new_color:"black",
      adj_arr: [],
    }
    this.changeColor = this.changeColor.bind(this);
    this.findAdjacents = this.findAdjacents.bind(this);
  }

findAdjacents() {
  console.log(this.state.adj_arr);
  for (let i = 0; i < this.state.adj_arr.length; i++){
    let x = this.state.adj_arr[i];
    this.refs[x].innerHTML = '';
    this.refs[x].append(this.state.new_color);
  }
}

changeColor(e, id){
    e.target.innerHTML = '';
    e.target.append(this.state.new_color);
    let adj_ids = [];
    for (let i = 0; i < this.state.adjacents[id].length; i++){
      adj_ids.push(this.state.adjacents[id][i]);
    }
    this.setState({
      adj_arr: adj_ids
    })
}

render() {
    this.findAdjacents();
    return (

      <div className="App container">
       {this.state.components.map(each_row => {
          return (
            <div className="row">
              {each_row.map (each_val => {
                return(
                    <div className="block col-sm-4"  ref={each_val} onClick={((e) => this.changeColor(e, each_val))}>
                      <p>{this.state.color}</p>
                    </div>
                )
              })}
            </div>
          );
        }
       )}
      </div>
    );
  }
}

export default App;
