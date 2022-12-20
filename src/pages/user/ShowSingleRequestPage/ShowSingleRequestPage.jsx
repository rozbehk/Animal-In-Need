import { render } from "@testing-library/react";
import { Component } from "react";
import { useLocation } from "react-router-dom";
import Map from "../../../components/Map/Map";

export default class ShowSingleRequest extends Component {
  state ={
    animal : null
  }
 timeFormat(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" ,hour: 'numeric',  minute: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

getOneAnimal = async (id) => {
  await fetch(`/api/animals/getone/${id}`)
      .then((res) => res.json())
      .then((animal) => this.setState({ animal }));
}

componentDidMount(){
  const id = window.location.pathname.split('/')[2]
  this.getOneAnimal(id)
}

render(){
  return (
    <section class="position-relative py-4 py-xl-5">
      {this.state.animal &&
      <div class="container position-relative">
        <div class="row">
          <div class="col mb-3">
            <Map mapCenter={this.state.animal.location} />
          </div>
          <div class="col-md-6 col-xl-4">
            <div>
              <img class='w-100' src={
                this.state.animal.image ? `${this.state.animal.image}` : "/images/image-not-found.png"
              } />
              <h3 >{this.state.animal.description}</h3>
              <br />
              <h4></h4>
              <h4>Description:{this.state.animal.description}</h4>
              <br />
              <h4>Kind: {this.state.animal.kind}</h4>
              <br />
              <h4>Submited By: {this.state.animal.userId.name}</h4>
              <br />
              <h4>Date: {this.timeFormat(this.state.animal.createdAt)}</h4>

            </div>
          </div>
        </div>
      </div>
      }
    </section>
  );

}
}
