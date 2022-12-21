import { Component } from "react";
import AnimalRow from "../../../components/AnimalRow/AnimalRow";

export default class AdminRequest extends Component {
  state = {
    animals: null,
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
        <section className="py-4 py-xl-5">
        {this.state.animals && (
        this.state.animals.length ? (
            this.state.animals.map(animal =>
              <AnimalRow animal={animal} getAnimals={this.getAnimals}/>
            )
          ) : (
            <div className="container mb-2">
              <div className="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
                <h1 className="fw-bold mb-2">There is no request</h1>
              </div>
            </div>
          )
        )}
        </section>
      </div>
    );
  }
}
