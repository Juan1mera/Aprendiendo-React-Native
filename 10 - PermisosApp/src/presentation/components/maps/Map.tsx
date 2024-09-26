import { Platform, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { Location } from '../../../infrastructure/interfaces/Location';
import FAB from '../ui/FAB';
import { useLocationStore } from '../../stores/location/useLocationStore';
import { clearWatchLocation } from '../../../actions/location/location';

interface Props{
    showsUserLocation?: boolean;
    initialLocation: Location;
}

const Map = ({ showsUserLocation=true, initialLocation }: Props) => {

  const mapRef = useRef<MapView | null>();
  const CameraLocation = useRef<Location>(initialLocation)
  const {getLocation, watchLocation, lasKnowLocation, clearWatchLocation, userLocationList} = useLocationStore();

  const [isFolowwingUSerLocation, setIsFolowwingUSerLocation] = useState(true);
  const [isWhowingPolyline, setIsWhowingPolyline] = useState(true);

  const moveCamaraToLocation = (location: Location) => {
    if (!mapRef.current) return;

    mapRef.current.animateCamera({
      center: location
    });

  }

  const moveToCurrentLocation = async() => {
    if(!lasKnowLocation){
      moveCamaraToLocation(initialLocation)
    }

    const location = await getLocation();
    if (!location) return;
    moveCamaraToLocation(location);
  }


  useEffect(() => {
    watchLocation()
  
    return () => {
      clearWatchLocation();
    }
  }, [])

  useEffect(() =>{
    if(lasKnowLocation && isFolowwingUSerLocation){
      moveCamaraToLocation(lasKnowLocation)
    }
  }, [lasKnowLocation, isFolowwingUSerLocation])
  


  return (
    <>
      <MapView
      ref = { (map) => mapRef.current = map!}
        showsUserLocation={showsUserLocation}
        provider={Platform.OS === 'ios' ? undefined : PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        onTouchStart={() => setIsFolowwingUSerLocation(false)}
        region={{
          latitude: CameraLocation.current.latitude,
          longitude: CameraLocation.current.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        scrollEnabled={true}
        zoomEnabled={true}
        rotateEnabled={true}
        pitchEnabled={true}
      >
        {
          isWhowingPolyline && (
            <Polyline 
            coordinates={userLocationList}
            strokeColor='red'
            strokeWidth={5}
          />
          )
        }
      </MapView>

      <FAB 
        iconName='compass-outline'
        onPress={moveToCurrentLocation}
        style={{
          bottom: 20,
          right: 20,
        }}
      />
      <FAB 
        iconName={ isFolowwingUSerLocation ? 'walk-outline' : 'accessibility-outline'}
        onPress={() => setIsFolowwingUSerLocation(!isFolowwingUSerLocation)}
        style={{
          bottom: 80,
          right: 20,
        }}
      />
      <FAB 
        iconName={ isWhowingPolyline ? 'eye-outline' : 'eye-off-outline'}
        onPress={() => setIsWhowingPolyline(!isWhowingPolyline)}
        style={{
          bottom: 140,
          right: 20,
        }}
      />
    </>
  );
};

export default Map;
