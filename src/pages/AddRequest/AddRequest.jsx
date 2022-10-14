import { Component, useEffect, useRef, mapRef } from "react";
import { Navigate } from "react-router";
import { Link } from 'react-router-dom'

import RequestMap from "../../components/RequestMap/RequestMap";
import RequestForm from "../../components/RequestForm/RequestFrom";

import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  useMap,
  
} from "react-leaflet";
import "./AddRequest.css";

let mapCenter = { lng: -79.384193, lat: 43.666042 };

function MapCenter() {
  const map = useMapEvents({
    moveend: (e) => {
      mapCenter.lat = e.target.getCenter().lat;
      mapCenter.lng = e.target.getCenter().lng;
    },
  });
  return null;
}

export default class AddRequest extends Component {
  state = {
    title: "",
    kind: "",
    description: "",
    lat: "",
    lng: "",
    image: "",
    userId: ""
  };
  handleChange = async (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      lat: mapCenter.lat,
      lng: mapCenter.lng,
    });
    console.log(this.state);
  };

  handleSubmit = async () => {
    let body = {
      title: this.state.title,
      kind: this.state.kind,
      description: this.state.description,
      image: this.state.image,
      location: { lat: this.state.lat, lng: this.state.lng },
    };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      
    };
    await fetch("/addrequest", options)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ title: "",
        kind: "",
        description: "",
        lat: "",
        lng: "",
        image: "",});
      });
      
  };
  componentDidMount(){
    this.state.userId = JSON.parse(atob(localStorage.getItem('token').split('.')[1])).user._id
  }
  
  render() {
    return (
      <div className="request-wrapper">
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
            <MapCenter />
            <div>
              <img
                className="icon-center"
                src="https://png.monster/wp-content/uploads/2021/06/png.monster-10-252x370.png"
                alt=""
              />
            </div>

            {/* <Marker position={[mapCenter.lat, mapCenter.lng]} /> */}
          </MapContainer>
        </div>
        <div>
          <div>
            <div>
              <div>
                <label forhtml="title">title:</label>
                <input
                  type="text"
                  name="title"
                  onChange={this.handleChange}
                  value={this.state.title}
                />
              </div>
              <div>
                <label forhtml="kind">kind:</label>
                <input
                  type="text"
                  name="kind"
                  onChange={this.handleChange}
                  value={this.state.kind}
                />
              </div>
              <div>
                <label forhtml="description">description:</label>
                <input
                  type="text"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                />
              </div>

              <div>
                <label forhtml="image">image:</label>
                <input
                  type="text"
                  name="image"
                  onChange={this.handleChange}
                  value={this.state.image}
                />
              </div>
              <div className="custom-file">
                <input type="file" aria-describedby="inputGroupFileAddon01" />
              </div>
              <br />
              <button onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
