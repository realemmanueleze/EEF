import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 38.6676,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={38.6676} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapStyle;
