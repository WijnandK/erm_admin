import React, { Component, Fragment } from 'react';
 import Square from "../cell/square"
class Stage extends Component {
state = {
  stage: [],
  newStage: [],
  loading: false
}
  componentDidMount() {
    console.log(this.props)
    let newStage = [...this.props.stage]
    let stage = this.props.stage 
 
    this.setState({stage: stage, newStage: newStage})
  }
  
  render() {

  console.log('he')
  return (
    <Fragment>
   
        {!this.state.loading && (
          this.state.stage.map(row => row.map((cell, index) => <Square key={index} color={this.props.bckColor}  type={cell[0]} name={cell[1]} id={index}/>)) 
        )}
      
     
      
    </Fragment>
  );
}
}

export default Stage;
