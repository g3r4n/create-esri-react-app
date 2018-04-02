import React, { Component, Fragment } from 'react';
import EsriMap from 'esri/Map';
import MapView from './MapView';
import './App.css';

var map = new EsriMap({
  basemap: 'streets',
});

class App extends Component {
  state = {
    center: {
      spatialReference: { latestWkid: 3857, wkid: 102100 },
      x: 15047024.975994881,
      y: -2875028.188734928,
    },
  };
  render() {
    return (
      <Fragment>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            backgroundColor: 'white',
          }}
        >
          center :<br /> x={this.state.center.x} <br />y={this.state.center.y}
        </div>
        <MapView
          map={map}
          onCenterChange={center => {
            this.setState({ center });
          }}
        />
      </Fragment>
    );
  }
}

export default App;
