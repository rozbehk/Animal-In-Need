import { Component } from "react";
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
import { geolocated } from 'react-geolocated'

export default class Map extends Component{

    state = {
        location:{lng: 43.666042,lat:  -79.384193},
        animalsData : []
    }
    

    getAnimals = async () => {
        await fetch("/api")
          .then((res) => res.json())
          .then((animalsData) => this.setState({ animalsData }));
    };
    
    render(){
        return(
            <MapContainer
                center={[this.state.location.lng,this.state.location.lat]}
                zoom={13}
                scrollWheelZoom={true}
            >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[this.state.location.lng,this.state.location.lat]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        )
    }
 
}


