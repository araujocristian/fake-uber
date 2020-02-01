import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_APIKEY } from 'react-native-dotenv';

const Directions = ({ destination, origin, onReady }) => {
  return (
    <MapViewDirections
      destination={destination}
      origin={origin}
      onReady={onReady}
      apikey={GOOGLE_APIKEY}
      strokeWidth={3}
      strokeColor="#222"
    />
  );
};

export default Directions;
