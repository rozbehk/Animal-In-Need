import { Component } from "react";
import { AninmalCard } from "../../../components/AnimalCard/AnimalCard";
import { getCurrentLatLng } from "../../../services/geolocation";

export default class ShowRequestPage extends Component {
  state = {
<<<<<<< HEAD
    animals: null,
=======
    animals: [],
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
    mapCenter: { lat: 44.666042, lng: -79.384193 },
    fetched: false,
  };

  getAnimals = async () => {
    await fetch("/api/animals/getall")
      .then((res) => res.json())
      .then((animals) => this.setState({ animals }));
  };



  async componentDidMount() {
    let { lat, lng } = await getCurrentLatLng();
    this.setState({ mapCenter: { lat, lng } });
    await this.getAnimals();
  }
  render() {
    return (
<<<<<<< HEAD
      
      <div className="container py-4 py-xl-5">
        {this.state.animals && 
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
=======
      <div class="container py-4 py-xl-5">
        <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
        {this.state.animals.length ? (
            this.state.animals.map(animal =>
              <AninmalCard animal={animal} getAnimals={this.getAnimals}/>
            )
          ) : (
<<<<<<< HEAD
           <div className="container mb-2 ">
              <div className="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
                <h1 className="fw-bold mb-2 animal-card">There is no request</h1>
=======
            <div class="container mb-2">
              <div class="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
                <h1 class="fw-bold mb-2">no request</h1>
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
              </div>
            </div>
          )}
          </div>
<<<<<<< HEAD
          }
=======
>>>>>>> e6324a2dadf3584b0c98f2a9be084a9a2d7f55ff
      </div>
    );
  }
}
