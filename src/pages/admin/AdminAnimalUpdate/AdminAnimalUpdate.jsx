import { Component } from "react";
import { getCurrentLatLng } from "../../../services/geolocation";
import "./AddRequestPage.css";
import Map from "../../../components/Map/Map";
import axios from 'axios';
import { Navigate } from "react-router-dom";

export default class AddRequestPage extends Component {
  state = {
    animal: {}
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token");
    if (!token) return null;
    const userId = JSON.parse(atob(token.split(".")[1])).user._id

    const formData = new FormData()
    formData.append("title", this.state.title)
    formData.append("location", this.state.mapCenter)
    formData.append("kind", this.state.kind)
    formData.append("description", this.state.description)
    formData.append("image", this.state.image)
    formData.append("lat", this.state.mapCenter.lat)
    formData.append("lng", this.state.mapCenter.lng)
    formData.append("userId", userId)

    let response = await axios.put("/api/animals/addrequest", formData)
    let url = `admin/requestupdate/${response.data._id}`
    this.setState({ animal: response.data, result: response.status, url: url })
  }


  async componentDidMount() {
 }

  setStateMapCenter = (lat, lng) => {
    this.setState({ mapCenter: { lat, lng } });
  };

  handleImage = (e) => {
    this.setFileToBase(e.target.files[0]);
    this.setState({ image: e.target.files[0] });
  };

  setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({ imageData: reader.result });
    };
  };

  render() {
    return (
      <div>
        {this.state.result === 200 && (
          <Navigate to={this.state.url} state={{ animal: this.state.animal }} />
        )}
        <section className="position-relative py-4 py-xl-5">
          <div className="container position-relative">
            <div className="row">
              <div className="col">
                <Map
                  mapCenter={this.state.mapCenter}
                  setStateMapCenter={this.setStateMapCenter}
                />
              </div>
              <div className="col-md-6 col-xl-4">
                <div>
                  <form className="p-3 p-xl-4" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                    <h4>Add Request</h4>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="title">
                        Title
                      </label>
                      <input
                        id="title"
                        className="form-control"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="description">
                        Description
                      </label>
                      <textarea
                        id="email"
                        className="form-control"
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        rows="6"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="description">
                        kind
                      </label>
                      <select
                        name="kind"
                        id="kind"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.state.type}
                      >
                        <option value="Dog">Dog</option>
                        <option value="Cat 2">Cat</option>
                        <option value="Bird">Bird</option>
                        <option value="Squirrels">Squirrels</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="image">
                        Image
                      </label>
                      <input
                        id="message"
                        className="form-control"
                        name="image"
                        type="file"
                        onChange={this.handleImage}
                      ></input>
                      {this.state.imageData && (
                        <img
                          className="img-thumbnail  mt-3"
                          src={this.state.imageData}
                          alt="upload"
                        />
                      )}
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
