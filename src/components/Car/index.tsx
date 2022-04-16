import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import { CarContainer, InformationsContainer, CarInformationsContainer, CarBrand, CarName, ValueContainer, RentPeriod, RentValueContainer, RentValue, FuelContainer, CarImage } from './styles';

interface CarProps extends RectButtonProps {
  name: string;
  brand: string;
  rent: {
    period: string;
    price: number;
  }
  thumbnail: string;
  fuel_type: string;
}

export function Car({ brand, name, rent, thumbnail, fuel_type, ...rest }: CarProps) {
  const MotorIcon = getAccessoryIcon(fuel_type)

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
            <RentValue>
              {rent.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', 'R$ ')}
            </RentValue>
          </RentValueContainer>
          <FuelContainer>
            <MotorIcon />
          </FuelContainer>
        </ValueContainer>
      </InformationsContainer>
      <CarImage source={{ uri: thumbnail }} resizeMode='contain' />
    </CarContainer>
  );
}
