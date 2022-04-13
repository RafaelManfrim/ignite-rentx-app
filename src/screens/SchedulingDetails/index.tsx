import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import {
  SchedulingDetailsContainer,
  SchedulingDetailsHeader,
  CarImages,
  CarContent,
  Details,
  CarDescription,
  CarDetailBrand,
  CarDetailName,
  CarRent,
  CarRentPeriod,
  CarRentValue,
  CarAcessoriesContainer,
  SchedulingPeriod,
  CalendarIconContainer,
  DateInfo,
  DateTitle,
  DateValue,
  DetailsFooter,
  SchedulePriceContainer,
  SchedulePriceLabel,
  SchedulePriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';

export function SchedulingDetails() {
  const { colors } = useTheme()

  return (
    <SchedulingDetailsContainer>
      <SchedulingDetailsHeader>
        <BackButton color={colors.title} onPress={() => { }} />
      </SchedulingDetailsHeader>
      <CarImages>
        <ImageSlider imagesUrl={['https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png', 'https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png', 'https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png', 'https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png']} />
      </CarImages>
      <CarContent>
        <Details>
          <CarDescription>
            <CarDetailBrand>AUDI</CarDetailBrand>
            <CarDetailName>A3</CarDetailName>
          </CarDescription>
          <CarRent>
            <CarRentPeriod>AO DIA</CarRentPeriod>
            <CarRentValue>R$ 230,00</CarRentValue>
          </CarRent>
        </Details>
        <CarAcessoriesContainer>
          <Acessory name='Teste' icon={SpeedSvg} />
          <Acessory name='Teste' icon={AccelerationSvg} />
          <Acessory name='Teste' icon={ForceSvg} />
          <Acessory name='Teste' icon={GasolineSvg} />
          <Acessory name='Teste' icon={ExchangeSvg} />
          <Acessory name='Teste' icon={PeopleSvg} />
        </CarAcessoriesContainer>
        <SchedulingPeriod>
          <CalendarIconContainer>
            <Feather name="calendar" size={RFValue(24)} color={colors.shape} />
          </CalendarIconContainer>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>15/04/2022</DateValue>
          </DateInfo>
          <Feather name="chevron-right" size={RFValue(24)} color={colors.text} />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/04/2022</DateValue>
          </DateInfo>
        </SchedulingPeriod>
        <SchedulePriceContainer>
          <SchedulePriceLabel>TOTAL</SchedulePriceLabel>
          <SchedulePriceDetails>
            <RentalPriceQuota>R$ 500 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 1500,00</RentalPriceTotal>
          </SchedulePriceDetails>
        </SchedulePriceContainer>
      </CarContent>
      <DetailsFooter>
        <Button title='Confirmar' color={colors.success} />
      </DetailsFooter>
    </SchedulingDetailsContainer>
  );
}
