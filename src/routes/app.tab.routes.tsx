import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MyCars } from '../screens/MyCars';
import { Profile } from '../screens/Profile';

import { AppStackRoutes } from './app.stack.routes'

import HomeSvg from '../assets/home_navigator.svg'
import MyCarsSvg from '../assets/car_navigator.svg'
import ProfileSvg from '../assets/people_navigator.svg'

export type AppTabParamList = {
  Main: undefined;
  MyCars: undefined;
  Profile: undefined;
};

const { Screen, Navigator } = createBottomTabNavigator<AppTabParamList>()

export function AppTabRoutes() {
  const { colors } = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: colors.background_primary
        }
      }}
    >
      <Screen name="Main" component={AppStackRoutes} options={{
        tabBarIcon: ({ color }) => (
          <HomeSvg width={24} height={24} fill={color} />
        )
      }} />
      <Screen name="MyCars" component={MyCars} options={{
        tabBarIcon: ({ color }) => (
          <MyCarsSvg width={24} height={24} fill={color} />
        )
      }} />
      <Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ color }) => (
          <ProfileSvg width={24} height={24} fill={color} />
        )
      }} />
    </Navigator>
  )
}