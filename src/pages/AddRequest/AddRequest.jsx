import { Component, useEffect, useRef, mapRef } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

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
    userId: "",
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
        this.setState({
          title: "",
          kind: "",
          description: "",
          lat: "",
          lng: "",
          image: "",
        });
      });
  };
  componentDidMount() {
    this.state.userId = JSON.parse(
      atob(localStorage.getItem("token").split(".")[1])
    ).user._id;
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

         
          </MapContainer>
        </div>

        <section class="vh-300">
          <div class="container py-5 h-200">
            <div class="row d-flex align-items-center justify-content-center h-100">
              <div class=" offset-xl-1">
                <form>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form1Example13">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      onChange={this.handleChange}
                      value={this.state.title}
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form1Example13">
                      Description
                    </label>
                    <input
                      type="text"
                      name="kind"
                      onChange={this.handleChange}
                      value={this.state.kind}
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form1Example13">
                      kind
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                      id="form1Example13"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form1Example13">
                      Image
                    </label>
                    <input
                      type="text"
                      name="image"
                      onChange={this.handleChange}
                      value={this.state.image}
                      id="form1Example13"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={this.handleSubmit}
                    class="btn btn-primary btn-lg btn-block"
                  >
                    <Link to="/animals" className="btn btn-primary btn-lg btn-block">
                      Submit
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
