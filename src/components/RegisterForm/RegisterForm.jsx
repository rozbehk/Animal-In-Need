import { Component } from "react";
import { Link } from "react-router-dom";
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
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          type: this.state.type,
        }),
      };
      const fetchResponse = await fetch("/users/signup", options);
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
         <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form1Example13">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="form1Example13">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    className="form-control form-control-lg"
                  />
                </div>
                <label className="form-label" for="form1Example13">
                  Passwrod
                </label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                  className="form-control form-control-lg"
                />
                <label className="form-label" for="form1Example13">
                  Veify Password
                </label>
                <input
                  type="password"
                  name="confirm"
                  value={this.state.confirm}
                  onChange={this.handleChange}
                  required
                  className="form-control form-control-lg"
                />
                <div></div>
                <div>
                  <button
                    disabled={disable}
                    type="submit"
                    onClick={this.handleSubmit}
                    className="btn btn-primary btn-lg btn-block"
                  >
                    <Link to="/" className="btn btn-primary btn-lg btn-block">
                      Register
                    </Link>
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
