import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }

const center = {
  lat: 52.17468934933358,
  lng: 0.13496329208894317
};


function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBzDxj3UJ3BJM2BDrPch2jswesxKo7lL74"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
           <Marker
      onLoad={onLoad}
      position={center}
    />
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)