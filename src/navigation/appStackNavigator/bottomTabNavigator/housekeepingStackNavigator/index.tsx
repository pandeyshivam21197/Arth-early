import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../../../constants';
import {Housekeeping} from '../../../../screens/housekeeping';

export type HomeNavigatorParamList = {
  [NavigationKeys.housekeepingScreen]: undefined;
};

const HousekeepingStack = createNativeStackNavigator<HomeNavigatorParamList>();

const HousekeepingStackNavigator = () => {
  return (
    <HousekeepingStack.Navigator>
      <HousekeepingStack.Screen
        name={NavigationKeys.housekeepingScreen}
        component={Housekeeping}
        options={{headerShown: false}}
      />
    </HousekeepingStack.Navigator>
  );
};

export default HousekeepingStackNavigator;
