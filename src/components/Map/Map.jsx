import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const containerStyle = {
    width: "90%",
    height: "500px",
    border: "10px solid var(--border-color)",
    borderRadius: "5px"

};

const center = {
    lat: 50.40820770961391,
    lng: 30.63521879951583,
};

function Map() {
    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;




