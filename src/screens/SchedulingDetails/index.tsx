import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
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
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format } from 'date-fns';
import { api } from '../../services/api';

interface RentalPeriodState {
  startFormatted: string
  endFormatted: string
}

export function SchedulingDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodState>({} as RentalPeriodState)
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()
  const route = useRoute()
  const { colors } = useTheme()
  const { car, dates } = route.params as SchedulingDetailsParams

  const rentTotal = dates.length * car.rent.price

  async function handleConfirmRent() {
    try {
      setLoading(true)
      const schedules_by_car = await api.get(`/schedules_bycars/${car.id}`)

      const unavailable_dates = [
        ...schedules_by_car.data.unavailable_dates,
        ...dates
      ]

      await api.post(`/schedules_byuser/`, {
        car,
        user_id: 1,
        startDate: rentalPeriod.startFormatted,
        endDate: rentalPeriod.endFormatted
      })

      await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates
      })

      navigation.navigate('Confirmation', {
        title: 'Carro alugado!',
        message: `Agora você só precisa ir \naté a concessionária da RENTX \npegar o seu automóvel.`,
        nextScreen: 'Home'
      })
    } catch (err) {
      console.log(err)
      Alert.alert('Houve um erro ao realizar o agendamento')
      navigation.navigate('Home')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    })
  }, [])

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
            <CarRentValue>
              {car.rent.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', 'R$ ')}
            </CarRentValue>
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
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>
          <Feather name="chevron-right" size={RFValue(24)} color={colors.text} />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </SchedulingPeriod>
        <SchedulePriceContainer>
          <SchedulePriceLabel>TOTAL</SchedulePriceLabel>
          <SchedulePriceDetails>
            <RentalPriceQuota>
              {car.rent.price.toLocaleString('pt-BR', {
                style: 'currency', currency: 'BRL'
              }).replace('R$', 'R$ ')} x{dates.length} {dates.length === 1 ? 'diária' : 'diárias'}
            </RentalPriceQuota>
            <RentalPriceTotal>
              {rentTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', 'R$ ')}
            </RentalPriceTotal>
          </SchedulePriceDetails>
        </SchedulePriceContainer>
      </CarContent>
      <DetailsFooter>
        <Button
          title='Confirmar'
          color={colors.success}
          onPress={handleConfirmRent}
          loading={loading}
          enabled={!loading}
        />
      </DetailsFooter>
    </SchedulingDetailsContainer>
  );
}
