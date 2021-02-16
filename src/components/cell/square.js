import React, { Fragment } from 'react';

const square = (props) => {
        
  return (
   <Fragment>
     <div className="square"   style={{backgroundColor: `${props.isActive ? props.color : "inherit"} `}} onClick={  () => console.log(props)}>
       
     </div>
    </Fragment>
  );
}

export default square;
