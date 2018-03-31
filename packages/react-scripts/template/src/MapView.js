import EsriMapView from 'esri/views/MapView';
import { Component } from 'react';
import React from 'react';

export default class MapView extends Component {
  componentDidMount() {
    var view = new EsriMapView({
      container: this.mapViewDiv,
      map: this.props.map,
      zoom: 5,
      center: [134.866944, -24.994167],
      ui: {
        components: [],
      },
    });
  }
  render() {
    return (
      <div
        style={{ height: '100%', width: '100%' }}
        ref={mapViewDiv => {
          this.mapViewDiv = mapViewDiv;
        }}
      />
    );
  }
}
