import {
    MapContainer,
    TileLayer,
    useMapEvents,
    useMap
  } from "react-leaflet";
import MapMarker from "../MapMarker/MapMarker";

import './Map.css'

function MapCenter(props) {
  useMapEvents({
    move: (e) => {
      props.setStateMapCenter(e.target.getCenter().lat,e.target.getCenter().lng)
    },
  });
  return null;
}

export default function Map(props) {
   function ChangeView({center}) {
      const map = useMap();
      map.setView(center);
      return null;
    }
  return (
    <div>
      <MapContainer
        className="Map"
        center={props.mapCenter}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
                {/* <div>
          <img
            className="icon-center"
            src="https://png.monster/wp-content/uploads/2021/06/png.monster-10-252x370.png"
            alt=""
          />
        </div> */}
        {props.setStateMapCenter && <MapCenter setStateMapCenter={props.setStateMapCenter}/>}
        <ChangeView center={props.mapCenter}/> 
        {props.animals && props.animals.map(animal => <MapMarker position={animal.location} />)}
        {!props.animals && <MapMarker position={props.mapCenter}/>}

      </MapContainer>
    </div>
  );
}
