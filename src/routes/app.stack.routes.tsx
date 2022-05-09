import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { Confirmation } from '../screens/Confirmation';

import { CarDTO } from '../dtos/CarDTO';

export type CarDetailsParams = {
  car: CarDTO
}

export type SchedulingParams = {
  car: CarDTO
}

export type SchedulingDetailsParams = {
  car: CarDTO,
  dates: string[]
}

export type ConfirmationParams = {
  title: string
  message: string
  nextScreen: 'Home' | 'SignIn'
}

export type RootStackParamList = {
  Home: undefined;
  CarDetails: CarDetailsParams;
  Scheduling: SchedulingParams;
  SchedulingDetails: SchedulingDetailsParams;
  Confirmation: ConfirmationParams;
};

const { Screen, Navigator } = createStackNavigator<RootStackParamList>()

export function AppStackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
      <Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  )
}