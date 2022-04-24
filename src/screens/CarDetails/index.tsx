import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

import { CarDetailsParams } from '../../routes/stack.routes';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import {
  CarDetailsContainer,
  CarDetailsHeader,
  Details,
  CarDescription,
  CarDetailBrand,
  CarDetailName,
  CarRent,
  CarRentPeriod,
  CarRentValue,
  AboutCar,
  CarAccessoriesContainer,
  DetailsFooter
} from './styles';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export function CarDetails() {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const route = useRoute()
  const scrollY = useSharedValue(0)
  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 200], [200, 85], Extrapolate.CLAMP)
    }
  })
  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 130], [1, 0], Extrapolate.CLAMP)
    }
  })
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const { car } = route.params as CarDetailsParams

  function handleScheduling() {
    navigation.navigate('Scheduling', { car })
  }

  return (
    <CarDetailsContainer>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <Animated.View style={headerStyleAnimation}>
        <CarDetailsHeader>
          <BackButton color={colors.title} onPress={() => navigation.goBack()} />
        </CarDetailsHeader>
        <Animated.View style={[sliderCarsStyleAnimation, { marginTop: getStatusBarHeight() + 32 }]}>
          <ImageSlider imagesUrl={car.photos} />
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 24, paddingTop: 80, alignItems: 'center' }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <CarDescription>
            <CarDetailBrand>{car.brand}</CarDetailBrand>
            <CarDetailName>{car.name}</CarDetailName>
          </CarDescription>
          <CarRent>
            <CarRentPeriod>{car.rent.period}</CarRentPeriod>
            <CarRentValue>
              {car.rent.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', 'R$ ')}
            </CarRentValue>
          </CarRent>
        </Details>
        <CarAccessoriesContainer>
          {car.accessories.map((accessory) => (
            <Accessory
              name={accessory.name}
              key={accessory.type}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </CarAccessoriesContainer>
        <AboutCar>{car.about}</AboutCar>
      </Animated.ScrollView>
      <DetailsFooter>
        <Button title='Escolher período do aluguel' onPress={handleScheduling} />
      </DetailsFooter>
    </CarDetailsContainer >
  );
}
