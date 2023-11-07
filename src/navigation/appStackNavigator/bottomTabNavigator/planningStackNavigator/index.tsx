import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../../../constants';
import {Planning} from '../../../../screens/planning';
import {Attendance} from '../../../../screens/attendance';

export type HomeNavigatorParamList = {
  [NavigationKeys.planningScreen]: undefined;
  [NavigationKeys.attendanceScreen]: undefined;
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
      <PlanningStack.Screen
        name={NavigationKeys.attendanceScreen}
        component={Attendance}
        options={{headerShown: false}}
      />
    </PlanningStack.Navigator>
  );
};

export default PlanningStackNavigator;
