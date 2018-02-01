import React, { Component } from 'react';

class Block extends Component {
  
 constructor(){
    super();
    this.state = {
    	color: "white",
    	clicked_block: ""
    }
    this.changeColor = this.changeColor.bind(this);
  }

changeColor(e){
	e.preventDefault();
	this.setState({
		color: "black",
		clicked_block: this.props.identifier
	})
	this.props.clicked(this.props.identifier);
}

 render() {
    return (
      <div className="block col-sm-3" id={this.props.identifier} onClick={this.changeColor}>
        <p>{this.state.color}, {this.state.clicked_block}</p>
      </div>
    );
  }
}

export default Block;