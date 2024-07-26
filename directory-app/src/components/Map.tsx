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
        <LoadScript googleMapsApiKey={"AIzaSyCFFgmnEsgLfiR-sJE9Jxtck1mgdmi7KgE"}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: company.latitude, lng: company.longitude }}
                zoom={8}
            >
                <MarkerF 
                    position={{ lat: company.latitude, lng: company.longitude }} label={company.name} 
                />
                {locations.map(location => (
                    <MarkerF
                        key={location.location_id}
                        position={{ lat: location.latitude, lng: location.longitude }} 
                        label={location.name}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
