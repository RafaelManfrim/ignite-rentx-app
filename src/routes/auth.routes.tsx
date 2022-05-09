import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { Confirmation } from '../screens/Confirmation';
import { FirstStep as SignUpFirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep as SignUpSecondStep } from '../screens/SignUp/SecondStep';

export type SignUpSecondStepParams = {
  user: {
    name: string,
    email: string,
    driverLicense: string
  }
}

export type ConfirmationParams = {
  title: string
  message: string
  nextScreen: 'Home' | 'SignIn'
}

export type AuthStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: SignUpSecondStepParams;
  Confirmation: ConfirmationParams;
};

const { Screen, Navigator } = createStackNavigator<AuthStackParamList>()

export function AppAuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  )
}
