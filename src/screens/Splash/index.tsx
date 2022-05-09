import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate, Extrapolate, runOnJS } from 'react-native-reanimated';

import BrandSvg from '../../assets/brand.svg'
import LogoSvg from '../../assets/logo.svg'

import { SplashContainer } from './styles';

export function Splash() {
  const navigation = useNavigation()
  const splashAnimation = useSharedValue(0)

  const brandStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [{
        translateX: interpolate(splashAnimation.value, [0, 50], [0, -250], Extrapolate.CLAMP)
      }]
    }
  })

  const logoStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1]),
      transform: [{
        translateX: interpolate(splashAnimation.value, [0, 50], [250, 0], Extrapolate.CLAMP)
      }]
    }
  })

  function startApp() {
    navigation.navigate('SignIn')
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1500 }, () => {
      'worklet'
      runOnJS(startApp)()
    })
  }, [])

  return (
    <SplashContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Animated.View style={[brandStyles, { position: 'absolute' }]}>
        <BrandSvg width={95} height={60} />
      </Animated.View>
      <Animated.View style={[logoStyles, { position: 'absolute' }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </SplashContainer>
  );
}
