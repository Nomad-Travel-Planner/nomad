import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./style.css";

class GoogleMaps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: { lat: 40.756795, lng: -73.954298 }
    };
  }

  render() {
    const apiIsLoaded = (map, maps) => {
      const directionsService = new maps.DirectionsService();
      const directionsRenderer = new maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
      const origin = { lat: 40.756795, lng: -73.954298 };
      const destination = { lat: 41.756795, lng: -78.954298 };

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    };
    return (
      <div>
        <div style={{ height: "400px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyA65_JW3JWGkUgmcJph_6r0uWiinwFQ1xY"
            }}
            defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
            defaultZoom={10}
            center={this.state.currentLocation}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
          />
        </div>
      </div>
    );
  }
}
export default GoogleMaps;
