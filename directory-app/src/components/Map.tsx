import React from 'react';
import { GoogleMap, LoadScript, MarkerF , InfoWindow  } from '@react-google-maps/api';
import { MapProps } from '../models/MapProps';
import { useState } from 'react';
import { Location } from 'react-router-dom';




const containerStyle = {
    width: '100%',
    height: '400px'
};

const Map: React.FC<MapProps> = ({ company, locations }) => {
    return (
        <LoadScript googleMapsApiKey={"AIzaSyCFFgmnEsgLfiR-sJE9Jxtck1"}>
            <GoogleMap
                mapContainerStyle={"ContainerStyle"}
                center={{ lat: company.latitude, lng: company.longitude }}
                zoom={10}
            >
                <MarkerF 
                    position={{ lat: company.latitude, lng: company.longitude }} 
                />
                {locations.map(location => (
                    <MarkerF
                        key={location.location_id}
                        position={{ lat: location.latitude, lng: location.longitude }}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
