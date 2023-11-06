import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../../../constants';
import {Planning} from '../../../../screens/planning';

export type HomeNavigatorParamList = {
  [NavigationKeys.planningScreen]: undefined;
};

const PlanningStack = createNativeStackNavigator<HomeNavigatorParamList>();

const PlanningStackNavigator = () => {
  return (
    <PlanningStack.Navigator>
      <PlanningStack.Screen
        name={NavigationKeys.planningScreen}
        component={Planning}
        options={{headerShown: false}}
      />
    </PlanningStack.Navigator>
  );
};

export default PlanningStackNavigator;
