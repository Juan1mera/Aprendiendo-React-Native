import { View, StyleSheet, Platform } from 'react-native';
import React, { useEffect } from 'react';
import Map from '../../components/maps/Map';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { getCurrentLocation } from '../../../actions/location/location';
import { useLocationStore } from '../../stores/location/useLocationStore';
import LoadingScreen from '../loading/LoadingScreen';

const MapScreen = () => {

  const  {lasKnowLocation, getLocation} = useLocationStore();

  useEffect(() => {

    if(lasKnowLocation === null){
      getLocation();
    }

  }, [  ])

  if(lasKnowLocation === null){
    return (<LoadingScreen />)
  }

  return (
  <View style={styles.container}>
     <Map 
        initialLocation={lasKnowLocation}
     />
   </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
 });
