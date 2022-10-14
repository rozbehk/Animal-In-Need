import { Component } from "react";
import {Marker,Popup,} from "react-leaflet";
import { Link } from "react-router-dom";


export default class MapMarker extends Component{

    state = {
        animals : []
    }
    async getAnimals() {
        await fetch(`/animals`)
        .then((res) => res.json())
        .then(animals =>  this.state.animals = animals)
    }

    componentDidMount(){
        this.props.getAnimals()
    }
    render() {
        return(
            <div onLoad={this.props.getAnimals()}>
                {this.props.animals.map(animal => (
                <Marker position={[animal.location.lat,animal.location.lng]}>
                    <Popup>
                        <p>Title: {animal.title}</p>
                        <p>Description: {animal.description}</p>
                        <p>Location {animal.location.lat},{animal.location.lng}</p>
                        <button type="submit" onClick={this.handleSubmit} ><Link to="/" className="navbar-item Navbar-item" >Details</Link></button>

                    </Popup>
                </Marker>
                ))}
            
            </div>
        )
    }
}