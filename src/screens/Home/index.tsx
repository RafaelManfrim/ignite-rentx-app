import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { HomeContainer, HomeHeader, HeaderContent, TotalCars } from './styles';
import { Car } from '../../components/Car';

export function Home() {
  return (
    <HomeContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <HomeHeader>
        <HeaderContent>
          <Logo height={RFValue(12)} width={RFValue(108)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </HomeHeader>
      <Car brand='AUDI' name='A3' rent={{ price: 40, period: 'AO DIA' }} thumbnail="https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png" />
      <Car brand='Ford' name='Mustang' rent={{ price: 95, period: 'AO DIA' }} thumbnail="https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png" />
    </HomeContainer>
  );
}
