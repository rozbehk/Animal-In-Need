import { Component } from "react";

export default class SignUpForm extends Component {

  registerOptions = ["user", "rescuer"];
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    type: "user",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
    console.log(this.state);
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user to our server
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          type: this.state.type,
          location: {countryId: this.state.countryId , provienceId : this.state.provienceId , cityId: this.state.cityId}
        }),
      };
      const fetchResponse = await fetch("/api/users/signup", options);
      console.log(fetchResponse);
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");

      let token = await fetchResponse.json();
      localStorage.setItem("token", token);

      let user = JSON.parse(atob(token.split(".")[1])).user;
      this.props.setUserInState(user);
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <label>Register As: </label>
            <select name="type" onChange={this.handleChange} >
              {this.registerOptions.map((registerOption) => (
                <option value={registerOption}>{registerOption}</option>
              ))}
            </select>
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
