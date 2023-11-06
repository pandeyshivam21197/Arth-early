import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './appStackNavigator';
// import {useAppSelector} from '../reduxStore/hooks';

const RootNavigator = () => {
  // const isLoggedIn = useAppSelector(state => state.singInReducer.isLoggedIn);

  return <NavigationContainer>{<AppStackNavigator />}</NavigationContainer>;
};

export default RootNavigator;
