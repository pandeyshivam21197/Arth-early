import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../../../constants';
import { More } from '../../../../screens/more';

export type HomeNavigatorParamList = {
  [NavigationKeys.moreScreen]: undefined;
};

const MoreStack = createNativeStackNavigator<HomeNavigatorParamList>();

const MoreStackNavigator = () => {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name={NavigationKeys.settingsScreen}
        component={More}
        options={{headerShown: false}}
      />
    </MoreStack.Navigator>
  );
};

export default MoreStackNavigator;
