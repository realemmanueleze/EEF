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
        <iframe
          className="w-100"
          height="600"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199393.34962873324!2d-77.29539034422747!3d38.65989086722219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7a8a0d529c19f%3A0x9690210724b38694!2sAccokeek%2C%20MD%2C%20USA!5e0!3m2!1sen!2sng!4v1681892893306!5m2!1sen!2sng"
          style={{ border: "0" }}
        ></iframe>
      </div>
    );
  }
}

export default GoogleMapStyle;
