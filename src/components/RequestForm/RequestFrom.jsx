import { Component } from "react";

export default class RequestForm extends Component{
render(){

    return (
      <div>
        <div>
          <div>
            <label forhtml="title">title:</label>
            <input
              type="text"
              name="title"
              onChange={this.props.handleChange}
              value={this.props.state.content}
            />
          </div>
          <div>
            <label forhtml="kind">kind:</label>
            <input
              type="text"
              name="kind"
              onChange={this.props.handleChange}
              value={this.props.state.kind}
            />
          </div>
          <div>
            <label forhtml="description">description:</label>
            <input
              type="text"
              name="description"
              onChange={this.props.handleChange}
              value={this.props.state.description}
            />
          </div>
          <div>
            <label forhtml="lat">Lat:</label>
            <input
              type="number"
              name="lat"
              onChange={this.props.handleChange}
              value={this.props.state.lat}
            />
          </div>
          <div>
            <label forhtml="lng">lng:</label>
            <input
              type="number"
              name="lng"
              onChange={this.props.handleChange}
              value={this.props.state.lng}
            />
          </div>
          <div>
            <label forhtml="image">image:</label>
            <input
              type="text"
              name="image"
              onChange={this.props.handleChange}
              value={this.props.state.image}
            />
          </div>
          <div className="custom-file">
            <input type="file" aria-describedby="inputGroupFileAddon01" />
          </div>
          <br />
          <button onClick={this.props.handleSubmit}>Submit!</button>
        </div>
      </div>
    );
  }
}
