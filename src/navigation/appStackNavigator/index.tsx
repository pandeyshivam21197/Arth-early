import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../constants';
import BottomTabNavigator from './bottomTabNavigator';
import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';

export type AppNavigatorParamList = {
  [NavigationKeys.bottomTab]: undefined;
};

const AppStack = createNativeStackNavigator<AppNavigatorParamList>();

// logged in user flow
const AppStackNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{contentStyle: styles.container}}>
      <AppStack.Screen
        name={NavigationKeys.bottomTab}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.screenBackground,
  },
});

export default AppStackNavigator;
