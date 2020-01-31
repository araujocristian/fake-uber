import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apiKey="AIzaSyD_VTxMb5jE4MbgCejBawD-QiZj-AwdiBQ"
      strokeWidth={3}
      strokeColor="#222"
    />
  );
};

export default Directions;
