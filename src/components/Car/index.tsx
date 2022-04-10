import React from 'react';

import { CarContainer, InformationsContainer, CarInformationsContainer, CarBrand, CarName, ValueContainer, RentPeriod, RentValueContainer, RentValue, FuelContainer, CarImage } from './styles';

import GasolineSvg from '../../assets/gasoline.svg';

interface CarProps {
  name: string;
  brand: string;
  rent: {
    period: string;
    price: number;
  }
  thumbnail: string
}

export function Car({ brand, name, rent, thumbnail }: CarProps) {
  return (
    <CarContainer>
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
