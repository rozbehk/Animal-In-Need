import { Component, push } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, logout, getUsername } from "../../utilities/auth";
import "./NavBar.css";
import jwtDecode from "jwt-decode";

export default class NavBar extends Component {
  state = {
    user: null,
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleLogout = (res) => {
    try {
      localStorage.removeItem("token");
      res.json(200);
    } catch (err) {
      res.status(400).json(err);
    }
    push("/");
  };
  getUserId = () => {
    return;
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem("token");
        token = null;
      } else {
        let user = payload.user;
        this.setState({ user });
      }
    }
  }

  username = getUsername();

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <div className="navbar-brand"></div>
            <div className="navbar-end"></div>
          </div>
        </nav>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
          <Link to="/" className="nav-link active">
                    Home
                  </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                 <li class="nav-item">
                  {isAuthenticated() && (
                    <Link to={`/addrequest`} className="nav-link active">
                      AddRequest
                    </Link>
                  )}
                </li>
                <li class="nav-item">
                  {isAuthenticated() && (
                    <Link to="/animals" className="nav-link">
                      Show Requests
                    </Link>
                  )}
                </li>
                <li class="nav-item">
                  {isAuthenticated() && (
                    <Link
                      to={`/profile/${this.username}/map`}
                      className="nav-link"
                    >
                      User Map
                    </Link>
                  )}
                </li>
              </ul>
              <span class="navbar-text">
                {!isAuthenticated() && (
                  <Link to="/register" className="navbar-item Navbar-item">
                    Register
                  </Link>
                )}
                {!isAuthenticated() && (
                  <Link
                    to="/Login"
                    setUserInState={this.setUserInState}
                    className="navbar-item Navbar-item"
                  >
                    Login
                  </Link>
                )}
                {isAuthenticated() && (
                  <span
                    onClick={this.handleLogout}
                    className="navbar-item Navbar-item"
                  >
                    <Link to="/" className="navbar-item Navbar-item">
                      logout
                    </Link>
                  </span>
                )}
              </span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
