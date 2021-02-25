import React, { Component, Fragment } from 'react';
import Stage from "./components/map/stage"
import './App.css';
import { createMapField,   createSouth } from "./components/map/mapfield";
 
import mapimg from "./images/map.jpg"
import Layout from "./components/layout/Layout";
 
class App extends Component {
  render() {

  
  return (
    <Fragment>
      <Layout>
            <img className="mapbcknl" src={mapimg}/>
   
    <div className="squaregrid">
  <Stage stage={createMapField()} bckColor="red"/>
   
  <Stage stage={createSouth()} bckColor="orange"/>

    </div>
          </Layout>

     </Fragment>
  );
}

 
}

export default App;
