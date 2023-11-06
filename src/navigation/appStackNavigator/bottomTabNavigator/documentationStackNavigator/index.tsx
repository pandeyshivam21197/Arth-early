import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationKeys} from '../../../constants';
import {Documentation} from '../../../../screens/documentation';

export type HomeNavigatorParamList = {
  [NavigationKeys.documentationScreen]: undefined;
};

const DocumentationStack = createNativeStackNavigator<HomeNavigatorParamList>();

const DocumentationStackNavigator = () => {
  return (
    <DocumentationStack.Navigator>
      <DocumentationStack.Screen
        name={NavigationKeys.documentationScreen}
        component={Documentation}
        options={{headerShown: false}}
      />
    </DocumentationStack.Navigator>
  );
};

export default DocumentationStackNavigator;
