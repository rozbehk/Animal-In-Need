import { Component } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Animal from "./components/Animal/Animal";
import { NavrBar } from "./components/NavBar/NavBar";
import AuthPage from "./pages/AuthPage/AuthPage";
import MyMap from "./components/Map/Map";

export default class App extends Component {
  state = {
    animals: [],
    user: null,
  };
  componentDidMount() {
    this.getAnimals();
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

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  getAnimals = async () => {
    await fetch("/api")
      .then((res) => res.json())
      .then((animals) => this.setState({ animals }));
  };

  


  render() {
    return (
      <div>
        <NavrBar user={this.state.user} />
        <MyMap animals={this.state.animals}/>
       {this.state.user ? (
          <main className="App">
            <Form getAnimals={this.getAnimals} user={this.state.user} />
            {this.state.animals.length ? (
              this.state.animals.map((animal) => <Animal animal={animal} />)
            ) : (
              <h1>No Animals</h1>
            )}
          </main>
        ) : (
          <AuthPage setUserInState={this.setUserInState} />
        )}
      </div>
    );
  }
}
