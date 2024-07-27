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
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const markerIcon = {
        url: 'https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png',
        scaledSize: new google.maps.Size(40, 40) // Adjust the size as needed
    };
    return (
        <LoadScript googleMapsApiKey="AIzaSyCFFgmnEsgLfiR-sJE9Jxtck1mgdmi7KgE">
             <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: company.latitude, lng: company.longitude }}
                zoom={13}
            >
                <MarkerF
                    position={{ lat: company.latitude, lng: company.longitude }}
                    icon={markerIcon}
                    label={{
                        text: company.name,
                        color: 'black',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}
                />
                {locations.map(location => (
                    <MarkerF
                        key={location.location_id}
                        position={{ lat: location.latitude, lng: location.longitude }}
                        icon={markerIcon}
                        label={{
                            text: location.name,
                            color: 'blue',
                            fontSize: '14px'
                        }}
                        onClick={() => setSelectedLocation(location)}
                    />
                ))}
                {selectedLocation && (
                    <InfoWindow
                        position={{ lat: selectedLocation.latitude, lng: selectedLocation.longitude }}
                        onCloseClick={() => setSelectedLocation(null)}
                    >
                        <div>
                            <h3>{selectedLocation.name}</h3>
                            <p>{selectedLocation.address}</p>
                            <p>Latitude: {selectedLocation.latitude}</p>
                            <p>Longitude: {selectedLocation.longitude}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;
