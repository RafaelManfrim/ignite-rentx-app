import React from 'react';
import LottieView from 'lottie-react-native'

import LoadCar from '../../assets/load_animation.json'

import { LoadAnimationContainer } from './styles';

export function LoadAnimation() {
  return (
    <LoadAnimationContainer>
      <LottieView source={LoadCar} autoPlay style={{ height: 200 }} resizeMode='contain' loop />
    </LoadAnimationContainer>
  );
}
