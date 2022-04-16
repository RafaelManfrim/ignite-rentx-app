import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';

import { CarDetailsParams } from '../../routes/stack.routes';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import {
  CarDetailsContainer,
  CarDetailsHeader,
  CarImages,
  CarContent,
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

export function CarDetails() {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const route = useRoute()
  const { car } = route.params as CarDetailsParams

  function handleScheduling() {
    navigation.navigate('Scheduling', { car })
  }

  return (
    <CarDetailsContainer>
      <StatusBar barStyle="dark-content" />
      <CarDetailsHeader>
        <BackButton color={colors.title} onPress={() => navigation.goBack()} />
      </CarDetailsHeader>
      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>
      <CarContent>
        <Details>
          <CarDescription>
            <CarDetailBrand>{car.brand}</CarDetailBrand>
            <CarDetailName>{car.name}</CarDetailName>
          </CarDescription>
          <CarRent>
            <CarRentPeriod>{car.rent.period}</CarRentPeriod>
            <CarRentValue>{car.rent.price}</CarRentValue>
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
      </CarContent>
      <DetailsFooter>
        <Button title='Escolher período do aluguel' onPress={handleScheduling} />
      </DetailsFooter>
    </CarDetailsContainer>
  );
}
