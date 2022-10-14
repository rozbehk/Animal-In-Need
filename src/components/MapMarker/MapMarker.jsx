import { Component } from "react";
import {Marker,Popup,} from "react-leaflet";
import { Link } from "react-router-dom";


export default class MapMarker extends Component{

    state = {
        animals : [],
    }
    async getAnimal() {
        await fetch(`/animals`)
        .then((res) => res.json())
        .then(animals =>  this.state.animals = animals)
    }

    async handleDelete(){
        let body = { 
            id : this.state.id,
        }
        console.log(body)
        let options = {
            method: "DELETE",
            headers: {
                "Content-Type":  "application/json"
            },
            body: JSON.stringify(body)
        }
        await fetch(`/delete/{this.state.id}`, options)
            .then(res=> res.json())
            .then(data => {
                this.props.getAnimals()
            })
    }

    componentDidMount(){
        this.props.getAnimals()
        console.log(this.props.animals)
    }
    render() {
        return(
            <div >
                {this.props.animals.map(animal => (
                <Marker position={[animal.location.lat,animal.location.lng]}>
                    <Popup>
                        <p>Title: {animal.title}</p>
                        <p>Description: {animal.description}</p>
                        <p>Location {animal.location.lat},{animal.location.lng}</p>
                        <img src={animal.img} alt="" />
                    </Popup>
                </Marker>
                ))}
            
            </div>
        )
    }
}