import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Icon, icons} from '../../../components/atoms/Icon';
import {NavigationKeys} from '../../constants';
import HousekeepingStackNavigator from './housekeepingStackNavigator';
import PlanningStackNavigator from './planningStackNavigator';
import DocumentationStackNavigator from './documentationStackNavigator';
import SettingsStackNavigator from './settingsStackNavigator';
import MoreStackNavigator from './moreStackNavigator';
import {theme} from '../../../styles/theme';
import {StyleSheet} from 'react-native';

export type BottomTabNavigatorParamList = {
  [NavigationKeys.housekeepingStack]: undefined;
  [NavigationKeys.documentationStack]: undefined;
  [NavigationKeys.moreStack]: undefined;
  [NavigationKeys.planningStack]: undefined;
  [NavigationKeys.settingsStack]: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const tabOptions = (tabLabel: string, iconName: string) => ({
  tabBarIcon: ({color}: {color: string}) => (
    <Icon name={iconName} color={color} size={20} />
  ),
  tabBarShowLabel: true,
  tabBarLabel: tabLabel,
});

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.palette.activeTint,
        tabBarStyle: styles.tabBarContainer,
        tabBarItemStyle: styles.tabItem,
      }}>
      <BottomTab.Screen
        name={NavigationKeys.planningStack}
        component={PlanningStackNavigator}
        options={tabOptions('Planning', icons.grid)}
      />
      <BottomTab.Screen
        name={NavigationKeys.documentationStack}
        component={DocumentationStackNavigator}
        options={tabOptions('Documentation', icons.editSqure)}
      />
      <BottomTab.Screen
        name={NavigationKeys.housekeepingStack}
        component={HousekeepingStackNavigator}
        options={tabOptions('HouseKeeping', icons.paper)}
      />
      <BottomTab.Screen
        name={NavigationKeys.settingsStack}
        component={SettingsStackNavigator}
        options={tabOptions('Settings', icons.setting)}
      />
      <BottomTab.Screen
        name={NavigationKeys.moreStack}
        component={MoreStackNavigator}
        options={tabOptions('More', icons.moreDots)}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 320,
    minHeight: 60,
  },
  tabItem: {
    padding: 12,
  },
});

export default BottomTabNavigator;
