import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { CarDTO } from '../dtos/CarDTO';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';

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

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  MyCars: undefined;
  CarDetails: CarDetailsParams;
  Scheduling: SchedulingParams;
  SchedulingDetails: SchedulingDetailsParams;
  SchedulingComplete: undefined;
};

const { Screen, Navigator } = createStackNavigator<RootStackParamList>()

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  )
}