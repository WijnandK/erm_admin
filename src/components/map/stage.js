import React, { Component, Fragment } from 'react';
 import Square from "../cell/square"
class Stage extends Component {
state = {
  stage: [],
  newStage: []
}
  componentDidMount() {
    console.log(this.props)
    let newStage = [...this.props.stage]
    let stage = this.props.stage 
 
    this.setState({stage: stage, newStage: newStage})
  }
  
  render() {

 
  return (
    <Fragment>
      
      { this.state.stage.map(row => row.map((cell, index) => <Square key={index} color={this.props.bckColor}  type={cell[0]} name={cell[1]} isActive={cell[0] > 0}   id={index}/>))}
      
    </Fragment>
  );
}
}

export default Stage;
