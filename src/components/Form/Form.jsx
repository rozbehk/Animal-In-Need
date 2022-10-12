import { Component } from "react";

export default class Form extends Component {
  state = {
    title: "",
    countryId: this.props.user.location.countryId,
    provienceId: this.props.user.location.provienceId,
    cityId: this.props.user.location.cityId,
    description: "",
    image: "",
  };

  HandleChange = async (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  
  handleSubmit = async () => {
    let body = {
      title: this.state.title,
      location: {
        countryId: this.state.countryId,
        provienceId: this.state.provienceId,
        cityId: this.state.cityId,
      },
      description: this.state.description,
      image: this.state.image,
    };
    console.log(body)
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
          <label for="title">title:</label>
          <input
            type="text"
            name="title"
            onChange={this.HandleChange}
            value={this.state.content}
          />
        </div>
        <div>
          <label for="description">description:</label>
          <input
            type="text"
            name="description"
            onChange={this.HandleChange}
            value={this.state.description}
          />
        </div>
        <div>
          <label for="image">image:</label>
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
