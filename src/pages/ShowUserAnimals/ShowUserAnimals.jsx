import { Component } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import Animal from "../../components/Animal/Animal";
import MapMarker from "../../components/MapMarker/MapMarker";

export default class ShowUserAnimals extends Component {
  state = {
    animals: [],
    userId: "",
    mapCenter: { lng: -79.384193, lat: 43.666042 },
  };

  async getAnimals() {
    await fetch(`/animals`)
    .then((res) => res.json())
    .then(animals =>  this.state.animals = animals)
  }

  componentDidMount() {
    this.state.userId = JSON.parse(
      atob(localStorage.getItem("token").split(".")[1])
    ).user._id;
    this.getAnimals();
  }

  render() {
    return (
      <div className="request-wrapper">
        <div>
          <MapContainer
            className="Map"
            center={[this.state.mapCenter.lat, this.state.mapCenter.lng]}
            zoom={13}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapMarker animals={this.state.animals} getAnimals={this.getAnimals} />
          </MapContainer>
        </div>
      </div>
    );
  }
}
