import { Component } from "react";
import { Link } from "react-router-dom";

import "./RegisterForm.css";

export default class RegisterForm extends Component {
  registerOptions = ["user", "rescuer"];
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
    rescuer: false,
  };

  handleChange = (evt) => {
  
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleCheckBox = (evt) => {
    this.setState({
      rescuer: evt.target.checked,
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    let message =''
    if(this.state.password != this.state.confirm){
      this.setState({error : "passwords do not match"})
      return
    }
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          rescuer: this.state.rescuer,
        }),
      };
      const fetchResponse = await fetch("/api/users/register", options);
      let responseMessage = await fetchResponse.json();
      console.log(responseMessage)
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
    const disable = this.state.password !== this.state.confirm;
    return (
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form className="text-center" method="post" onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="confirm"
                    placeholder="Verify Password"
                    required
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label className="form-label" htmlhtmlFor="rescuer">Register As Resquer</label>
                    <input
                      type="checkbox"
                      id="rescuer"
                      name="rescuer"
                      onChange={this.handleCheckBox}
                    />
                  </div>
                  {this.state.error && <div>{this.state.error}</div>}
                <div className="mb-3">
                  <button className="btn btn-primary d-block w-100" type="submit">
                    Register
                  </button>
                </div>
                <p className="text-light">
                  Do you have account?
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
