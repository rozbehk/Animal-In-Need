import {
    Marker,
  } from "react-leaflet";

export default function MapMarker(props){
    return(
        <Marker position={props.position} />

    )
}