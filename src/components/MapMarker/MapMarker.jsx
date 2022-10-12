import {Marker,Popup,} from "react-leaflet";


export default function MapMarker (props){
    let props2 = {lat: "43.698020", lng:"-79.389324" }
    function consoleLog(){
        console.log(props.animals)
    }

    return(
        <div onClick={consoleLog}>
            {props.animals.map(animal => (
                <Marker position={[animal.location.lat,animal.location.lng]}>
                <Popup>
                    <p>test</p>
                </Popup>
            </Marker>
            ))}
            
        </div>
    )
       
}