import React, { Component } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import './RequestMap.css'

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

let mapCenter = { lng: -79.384193, lat: 43.666042 };

function MapCenter() {
  const map = useMapEvents({
    moveend: (e) => {
      mapCenter.lat = e.target.getCenter().lat;
      mapCenter.lng = e.target.getCenter().lng;
      console.log(mapCenter)
    },
  });
  return null;
}

export default class RequestMap extends Component {
  state = {
    userLocation : {lat:-79.384193 , lng:43.666042},
  };
  

  
  render() {
    return (
      <div>
        <MapContainer
          className="Map"
          center={[mapCenter.lat, mapCenter.lng]}
          zoom={15}
          scrollWheelZoom={true}
          
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapCenter/>
          {/* <MapMarker animals={this.state.animals} getAnimals={this.props.getAnimals}/> */}
        </MapContainer>
      </div>
    );
  }
}
