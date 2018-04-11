import EsriMapView from 'esri/views/MapView';
import React, { Component } from 'react';

export default class MapView extends Component {
  componentDidMount() {
    var view = new EsriMapView({
      container: this.mapViewDiv,
      map: this.props.map,
      zoom: 4,
      center: [134.866944, -24.994167],
      ui: {
        components: [],
      },
    });
    view.watch('center', this._onCenterChange.bind(this));
  }
  _onCenterChange(center) {
    if (typeof this.props.onCenterChange === 'function') {
      this.props.onCenterChange(center.toJSON());
    }
  }
  render() {
    return (
      <div
        className="map-container"
        ref={mapViewDiv => {
          this.mapViewDiv = mapViewDiv;
        }}
      />
    );
  }
}
