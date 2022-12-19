import { Component } from "react";
import AnimalRow from "../../components/AnimalRow/AnimalRow";

export default class AdminRequest extends Component {
  state = {
    animals: [],
  };
  getAnimals = () => {
    fetch("/api/animals/getall")
      .then((res) => res.json())
      .then((animals) => this.setState({ animals }));
  };

  componentDidMount() {
    this.getAnimals();
  }

  render() {
    return (
      <div>
        <section class="py-4 py-xl-5">
        {this.state.animals.length ? (
            this.state.animals.map(animal =>
              <AnimalRow animal={animal} getAnimals={this.getAnimals}/>
            )
          ) : (
            <div class="container mb-2">
              <div class="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
                <h1 class="fw-bold mb-2">There is no request</h1>
              </div>
            </div>
          )}
        </section>
      </div>
    );
  }
}
