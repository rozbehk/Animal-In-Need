import { Component } from "react";
import { Link } from "react-router-dom";
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
      const fetchResponse = await fetch("/users/login", options);

      if (!fetchResponse.ok) throw new Error("Fetch Failed - Bad Request");
      console.log(fetchResponse);
      let token = await fetchResponse.json();
      localStorage.setItem("token", token);

      const user = JSON.parse(atob(token.split(".")[1])).user;
      this.props.setUserInState(user);
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ err });
    }
  };

  render() {
    return (
      <div>
        {/* <div className="form-container" onSubmit={this.handleSubmit}>
          <form autoComplete="off">
            <label>Email</label>
            <input
              type="text"
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
            <button type="submit" onClick={this.handleSubmit}>
              LOG IN
            </button>
          </form>
        </div> */}

        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                      id="form1Example13"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form1Example23">
                      Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    onClick={this.handleSubmit}
                    className="btn btn-primary btn-lg btn-block"
                  >
                    <Link to="/" className="btn btn-primary btn-lg btn-block">
                      Login
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </section>
      </div>
    );
  }
}
