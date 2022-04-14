import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import { HomeContainer, HomeHeader, HeaderContent, TotalCars, CarList } from './styles';

export function Home() {
  const car = { name: 'A3', brand: 'AUDI', rent: { price: 40, period: 'AO DIA' }, thumbnail: 'https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png' }

  const navigation = useNavigation()

  function handleCarDetails() {
    navigation.navigate("CarDetails")
  }

  return (
    <HomeContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <HomeHeader>
        <HeaderContent>
          <Logo height={RFValue(12)} width={RFValue(108)} />
          <TotalCars>Total de 8 carros</TotalCars>
        </HeaderContent>
      </HomeHeader>
      <CarList data={[1, 2, 3, 4, 5, 6, 7, 8]} keyExtractor={item => String(item)} renderItem={({ item }) => (
        <Car brand={car.brand} name={car.name} rent={car.rent} thumbnail={car.thumbnail} onPress={handleCarDetails} />
      )} />
    </HomeContainer>
  );
}
