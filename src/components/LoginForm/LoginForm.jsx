import { Component } from "react";
import {useHistory , Link} from 'react-router-dom'

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
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ 
          email: this.state.email, 
          password: this.state.password
        })
      }
      const fetchResponse = await fetch("/users/login", options)
      
      if (!fetchResponse.ok) throw new Error("Fetch Failed - Bad Request")
      console.log(fetchResponse)
      let token = await fetchResponse.json()
      localStorage.setItem('token', token)

      const user = JSON.parse(atob(token.split('.')[1])).user
      this.props.setUserInState(user)
      useHistory('/')
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ err });
    }
  };

  render() {
    return (
      <div>
        <div className="form-container" onSubmit={this.handleSubmit}>
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
            <button type="submit">LOG IN</button>
            <button type="submit" onClick={this.handleSubmit} ><Link to="/" className="navbar-item Navbar-item" >logout</Link></button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>

      </div>
    );
  }
}
