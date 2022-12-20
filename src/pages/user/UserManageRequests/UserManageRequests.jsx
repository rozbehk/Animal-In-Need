import axios from "axios";
import { Component } from "react";
import AnimalRow from "../../../components/AnimalRow/AnimalRow";
// import AdminAnimalRow from "../../components/AdminAnimalRow/AdminAnimalRow";

export default class UserManageRequests extends Component {
  state = {
    animals: [],
    userName: ''
  };
  getAnimals = async () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const userId = JSON.parse(atob(token.split(".")[1])).user._id

    let userRequests = await fetch(`/api/animals/usergetall/${userId}`).then(res => res.json()).then(res => this.setState({ animals: res.requests, userName: res.name }))
    // this.setState({animals: userRequests.data.requests})
  };

  componentDidMount() {
    this.getAnimals();
  }

  render() {
    return (
      <div>
        <section class="py-4 py-xl-5">
          {!this.state.animals && (
            <div class="container mb-2">
              <div class="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
                <h1 class="fw-bold mb-2">You have no request</h1>
              </div>
            </div>
          )}
          {this.state.animals && (
            this.state.animals.map(animal =>
              <AnimalRow animal={animal} getAnimals={this.getAnimals} />
            ))}
        </section>
      </div >
    );
  }
}

