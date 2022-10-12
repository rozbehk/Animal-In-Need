// import { Component } from "react";
// import { MapContainer,TileLayer,Marker,Popup,eventHandlers } from "react-leaflet";
// import { geolocated } from 'react-geolocated'

// export default class Map extends Component{

//     state = {
//         location:{lng: 43.666042,lat:  -79.384193},
//     }

//     handleMoveEnd() {
//         console.log("marker \n");

//       }

//     getAnimals = async () => {
//         await fetch("/api")
//           .then((res) => res.json())
//           .then((animalsData) => this.setState({ animalsData }));
//     };

//     render(){
//         return(
//             <MapContainer
//                 center={[this.state.location.lng,this.state.location.lat]}
//                 zoom={13}
//                 scrollWheelZoom={true}

//             >
//             <TileLayer
//                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={[this.state.location.lng,this.state.location.lat]} >
//                 <Popup>
//                     A pretty CSS3 popup. <br /> Easily customizable.
//                 </Popup>
//             </Marker>
//         </MapContainer>
//         )
//     }

// }

import React, { Component } from "react";
import MapMarker from '../MapMarker/MapMarker'
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

let mapCenter = { lng: -79.384193, lat: 43.666042 };

function MyComponent(props) {
  const map = useMapEvents({
    moveend: (e) => {
      mapCenter.lat = e.target.getCenter().lat;
      mapCenter.lng = e.target.getCenter().lng;
    },
  });
  return null;
}

export default class MyMap extends Component {
  state = {
    animals: [],
  };
  componentDidMount() {
    this.getAnimals();
  }
  getAnimals = async () => {
    await fetch("/api")
      .then((res) => res.json())
      .then((animals) => this.state.animals = animals)
      .then(console.log(this.state))
  };
  render() {
    return (
      <div>
        <MapContainer
          className="Map"
          center={[mapCenter.lat, mapCenter.lng]}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: "100vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MyComponent/>
          <MapMarker animals={this.state.animals}/>
        </MapContainer>
      </div>
    );
  }
}
