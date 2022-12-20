import { Component } from "react";
import { Link } from "react-router-dom";
export default class RequestForm extends Component{
render(){

    return (
      <div>
        {/* <div>
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
        </div> */}
        <section class="vh-100">
          <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
              <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form>
                  <div class="form-outline mb-4">
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
                      Email address
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="form1Example23">
                      Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    class="btn btn-primary btn-lg btn-block"
                  >
                    <Link to="/" className="btn btn-primary btn-lg btn-block">
                      Login
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
