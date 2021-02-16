import React,{Fragment} from 'react';
import Square from "./square"
const cell = (props) => {
  console.log(props)

let map = props.cells.map((cell, i) => (
  <Square cell={cell}/>
)) 
  return (
    <Fragment>
       {map}
      
    </Fragment>
  );
}

export default cell;
