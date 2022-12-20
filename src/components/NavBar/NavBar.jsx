import { Component } from "react";
import { Link } from "react-router-dom";
import { isAdmin , isRescuer, isAuthenticate } from "../../services/userServices"
import "./Navbar.css";

export default class NavBar extends Component {
  state = {
    user: {},
  };

  handleLogout(res) {
    try {
      this.props.setUserInState("");
      localStorage.removeItem("token");
      res.json(200);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  setActiveCategory = (active) => {
    this.setState({ activeCategory: active });
  };
  componentDidMount() {
    this.setState({user: this.props.userState});
  }
  render() {
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-dark p-3"> */}
        <nav className="navbar navbar-dark navbar-expand-md bg-dark">
          <div className="container-fluid">
            <Link to="/home" className="nav-item">
              <img
                className="logo"
                src='/logo.png'
                alt=""
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className=" collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item">
                  {" "}
                  <Link
                    onClick={() => this.setActiveCategory("home")}
                    className={
                      this.state.activeCategory === "home"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                {isAuthenticate() && (
                  <li className="nav-item">
                    <Link
                      onClick={() => this.setActiveCategory("add-request")}
                      to="/user/addrequest"
                      className={
                        this.state.activeCategory === "add-request"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Add Request
                    </Link>
                  </li>
                )}

                {isAuthenticate() && isRescuer() && (
                  <li className="nav-item">
                    <Link
                      onClick={() => this.setActiveCategory("show-request")}
                      to="/user/showrequest"
                      className={
                        this.state.activeCategory === "show-request"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Show Requests
                    </Link>
                  </li>
                )}
                {isAuthenticate() && isAdmin() && (
                  <li className="nav-item">
                    <Link
                      onClick={() => this.setActiveCategory("admin-panel")}
                      to="/admin/panel"
                      className={
                        this.state.activeCategory === "admin-panel"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Admin Panel
                    </Link>
                  </li>
                )}
                {isAuthenticate() && !isAdmin() && !isRescuer() && (
                  <li className="nav-item">
                    <Link
                      onClick={() => this.setActiveCategory("user-panel")}
                      to="/user/panel"
                      className={
                        this.state.activeCategory === "user-panel"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      User Panel
                    </Link>
                  </li>
                )}
                {!isAuthenticate() && (
                  <li className="nav-item">
                    <Link
                      onClick={() => this.setActiveCategory("register")}
                      to="/user/register"
                      className={
                        this.state.activeCategory === "register"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Register
                    </Link>
                  </li>
                )}
                {!isAuthenticate() && (
                  <li className="nav-item">
                    <Link
                      onClick={() => this.setActiveCategory("login")}
                      to="/user/login"
                      className={
                        this.state.activeCategory === "login"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      Login
                    </Link>
                  </li>
                )}
                {isAuthenticate() && (
                  <li className="nav-item" onClick={() => this.handleLogout()}>
                    <Link to="/logout" className="nav-link">
                      logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
