import 'react-native-gesture-handler'; 

// import {enableLatestRendered} from 'react-native-maps';

// enableLatestRendered();

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/Navigator';
import PermissionsCheker from './presentation/providers/PermissionsCheked';

const MapsApp = () => {
  return (
    <NavigationContainer>
      <PermissionsCheker>
        <StackNavigator />
      </PermissionsCheker>
    </NavigationContainer>
  );
};

export default MapsApp;
