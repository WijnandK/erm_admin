import Stage from "./components/map/stage"
import './App.css';
import { createMapField, createMiddle, createSouth } from "./components/map/mapfield";
import { Fragment, React } from "react";
import mapimg from "./images/map.jpg"
import Layout from "./components/layout/Layout";
function App() {
  
  return (
    <Fragment>
      <Layout>
            <img className="mapbcknl" src={mapimg}/>
   
    <div className="squaregrid">
  <Stage stage={createMapField()} bckColor="red"/>
    <Stage stage={createMiddle()} bckColor="blue"/>
  <Stage stage={createSouth()} bckColor="orange"/>

    </div>
          </Layout>

     </Fragment>
  );
}

export default App;
