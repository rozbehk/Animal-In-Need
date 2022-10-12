import { Component } from "react";

export default class Form extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    lng: 0,
    lat:0,
    kind: ""
  };

  HandleChange = async (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  
  handleSubmit = async () => {
    let body = {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image,
      location : {lat: this.state.lat, lng: this.state.lng}
    };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    await fetch("/api", options)
      .then((res) => res.json())
      .then((data) => {
        this.props.getAnimals();
        this.setState({ content: "" });
      });
      
  };

  render() {
    return (
      <div>
        <div>
          <label forhtml="title">title:</label>
          <input
            type="text"
            name="title"
            onChange={this.HandleChange}
            value={this.state.content}
          />
        </div>
        <div>
          <label forhtml="kind">kind:</label>
          <input
            type="text"
            name="kind"
            onChange={this.HandleChange}
            value={this.state.kind}
          />
        </div>
        <div>
          <label forhtml="description">description:</label>
          <input
            type="text"
            name="description"
            onChange={this.HandleChange}
            value={this.state.description}
          />
        </div>
        <div>
          <label forhtml="lat">Lat:</label>
          <input
            type="number"
            name="lat"
            onChange={this.HandleChange}
            value={this.state.lat}
          />
        </div>
        <div>
          <label forhtml="lng">lng:</label>
          <input
            type="number"
            name="lng"
            onChange={this.HandleChange}
            value={this.state.lng}
          />
        </div>
        <div>
          <label forhtml="image">image:</label>
          <input
            type="text"
            name="image"
            onChange={this.HandleChange}
            value={this.state.image}
          />
        </div>
        <div className="custom-file">
      <input
        type="file"
        aria-describedby="inputGroupFileAddon01"
      />
      </div>
        <br />
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    );
  }
}
