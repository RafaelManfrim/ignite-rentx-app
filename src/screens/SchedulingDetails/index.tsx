import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { SchedulingDetailsParams } from '../../routes/stack.routes';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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
  CarAccessoriesContainer,
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
  const navigation = useNavigation()
  const route = useRoute()
  const { colors } = useTheme()
  const { car, dates } = route.params as SchedulingDetailsParams

  function handleConfirmRent() {
    navigation.navigate('SchedulingComplete')
  }

  return (
    <SchedulingDetailsContainer>
      <StatusBar barStyle="dark-content" />
      <SchedulingDetailsHeader>
        <BackButton color={colors.title} onPress={() => navigation.goBack()} />
      </SchedulingDetailsHeader>
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
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </CarAccessoriesContainer>
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
        <Button title='Confirmar' color={colors.success} onPress={handleConfirmRent} />
      </DetailsFooter>
    </SchedulingDetailsContainer>
  );
}
