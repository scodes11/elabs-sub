import React from "react";
import GoogleMapReact from 'google-map-react'
import './css/Map.css';
import {API_KEY} from "./Api";

function Map() {
    const zoomLevel = 17;
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }

      const mapStyle = {
          width: "450px",
          height: "75vh"
      }

    return (
        <div className="map">
        
            <div style={mapStyle} className="google-map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
              >
            
              </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map;
