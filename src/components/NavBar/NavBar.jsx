import { Component } from "react";
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
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-3">
          <div class="container-fluid">
            <img
              className="logo"
              src="https://i.imgur.com/uozApno.png"
              alt=""
            />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ms-auto ">
                <li class="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                {isAuthenticated() && (
                  <Link to={`/addrequest`} className="nav-link">
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
                <li>
                {!isAuthenticated() && (
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                )}
                </li>

                <li>
                {!isAuthenticated() && (
                  <Link
                    to="/Login"
                    className="nav-link"
                  >
                    Login
                  </Link>
                )}
                </li>
                <li >
                {isAuthenticated() && (
                  <span
                    onClick={this.handleLogout}
                    className="navbar-item Navbar-item"
                  >
                    <Link className="nav-link" to="/" >
                      logout
                    </Link>
                  </span>
                )}
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
