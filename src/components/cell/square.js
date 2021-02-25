 import React, { Component } from 'react';
 
 class square extends Component {
   render() {      
     

    let square = null;
    switch (this.props.type) {
      case 0:
        square = <div className="square" onClick={  () => console.log(this.props)}></div>;
        break;
      case 2:
        square =<div className="squaretwo" onClick={  () => console.log(this.props)}> </div>
        break;
      case 4:
        square = <div className="squarefour" onClick={  () => console.log(this.props)}></div>
        break;
      case 6:
        square = <div className="squaresix" onClick={  () => console.log(this.props)}></div>
        break;
      case 8:
    square = <div className="squareeight" onClick={  () => console.log(this.props)}></div>
        break;
      case 10:
      square = <div className="squareten" onClick={  () => console.log(this.props)}></div>
        break;
      default:
        square = null;
    }

    return square;
  }
}
 
    
 
 export default square;
 