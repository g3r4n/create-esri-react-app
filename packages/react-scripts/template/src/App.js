import React, { Component } from 'react';
import EsriMap from 'esri/Map';
import MapView from './MapView';
import './App.css';

var map = new EsriMap({
  basemap: 'streets',
});

class App extends Component {
  render() {
    return <MapView map={map} />;
  }
}

export default App;
