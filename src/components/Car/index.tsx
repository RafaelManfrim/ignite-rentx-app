import React from 'react';

import { CarContainer, InformationsContainer, CarInformationsContainer, CarBrand, CarName, ValueContainer, RentPeriod, RentValueContainer, RentValue, FuelContainer, CarImage } from './styles';

import GasolineSvg from '../../assets/gasoline.svg';
import { RectButtonProps } from 'react-native-gesture-handler';

interface CarProps extends RectButtonProps {
  name: string;
  brand: string;
  rent: {
    period: string;
    price: number;
  }
  thumbnail: string
}

export function Car({ brand, name, rent, thumbnail, ...rest }: CarProps) {
  return (
    <CarContainer {...rest}>
      <InformationsContainer>
        <CarInformationsContainer>
          <CarBrand>{brand}</CarBrand>
          <CarName>{name}</CarName>
        </CarInformationsContainer>
        <ValueContainer>
          <RentValueContainer>
            <RentPeriod>{rent.period}</RentPeriod>
            <RentValue>R$ {rent.price},00</RentValue>
          </RentValueContainer>
          <FuelContainer>
            <GasolineSvg />
          </FuelContainer>
        </ValueContainer>
      </InformationsContainer>
      <CarImage source={{ uri: thumbnail }} resizeMode='contain' />
    </CarContainer>
  );
}
