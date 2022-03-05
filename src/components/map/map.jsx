import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import locationMark from "../../assets/icon-location.svg"
import 'leaflet/dist/leaflet.css';

const geoMarker = L.icon ({
    iconUrl: locationMark,
    iconSize: [32]
})


const MapInfo = (props) => {
  return (
    <MapContainer style={{height: "100%", zIndex: "2"}} center={props.position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={geoMarker} position={props.position}>
            
        </Marker>
    </MapContainer>
  )
}

export default MapInfo