import { Component } from "react";
import { Link } from "react-router-dom";

import "./LoginForm.css";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      };
      const fetchResponse = await fetch("/api/users/login", options);
      let responseMessage = await fetchResponse.json();
      if (!fetchResponse.ok) {
        this.setState({ error: responseMessage });
        throw new Error(responseMessage);
      }
      localStorage.setItem("token", responseMessage);
      let user = JSON.parse(atob(responseMessage.split(".")[1])).user;
      this.props.setUserInState(user);
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  render() {
    return (
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <div className="input">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                      className="form-control form-control-lg"
                    />
                  </div>
                  <div className="input">
                    <label className="form-label" htmlFor="password">
                      Passwrod
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                {this.state.error && (
                  <h3 className="pb-3 col text-warning font-weight-bold">
                    {this.state.error}
                  </h3>
                )}
                <div>
                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    className="btn btn-primary btn-lg btn-block"
                  >
                                          Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
