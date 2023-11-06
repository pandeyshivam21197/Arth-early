import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../../../constants';
import {Settings} from '../../../../screens/settings';

export type HomeNavigatorParamList = {
  [NavigationKeys.settingsScreen]: undefined;
};

const SettingsStack = createNativeStackNavigator<HomeNavigatorParamList>();

const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name={NavigationKeys.settingsScreen}
        component={Settings}
        options={{headerShown: false}}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackNavigator;
