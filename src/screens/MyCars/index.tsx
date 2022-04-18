import { useNavigation } from '@react-navigation/native';
import { Alert, StatusBar, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import { Car } from '../../components/Car';
import { BackButton } from '../../components/BackButton';

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';

import {
  MyCarsContainer,
  MyCarsHeader,
  MyCarsHeaderTitle,
  MyCarsHeaderSubtitle,
  MyCarsContent,
  MyCarsAppointments,
  MyCarsAppointmentsTitle,
  MyCarsAppointmentsQuantity
} from './styles';
import { Loading } from '../../components/Loading';

interface CarByUserProps {
  user_id: number
  id: number
  car: CarDTO
}

export function MyCars() {
  const [cars, setCars] = useState<CarByUserProps[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()
  const { colors } = useTheme()

  useEffect(() => {
    async function loadCarsByUser() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1')
        setCars(response.data)
      } catch (err) {
        console.log(err)
        Alert.alert('Houve um erro ao carregar a lista de carros')
      } finally {
        setLoading(false)
      }
    }

    loadCarsByUser()
  }, [])

  return (
    <MyCarsContainer>
      <MyCarsHeader>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <BackButton color={colors.shape} onPress={() => navigation.goBack()} />
        <MyCarsHeaderTitle>
          Seus agendamentos
        </MyCarsHeaderTitle>
        <MyCarsHeaderSubtitle>
          Conforto, segurança e praticidade.
        </MyCarsHeaderSubtitle>
      </MyCarsHeader>
      <MyCarsContent>
        <MyCarsAppointments>
          <MyCarsAppointmentsTitle>Agendamentos feitos</MyCarsAppointmentsTitle>
          <MyCarsAppointmentsQuantity>{cars.length}</MyCarsAppointmentsQuantity>
        </MyCarsAppointments>
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={cars}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Car
                brand={item.car.brand}
                fuel_type={item.car.fuel_type}
                name={item.car.name}
                rent={item.car.rent}
                thumbnail={item.car.thumbnail}
              />
            )}
          />
        )}
      </MyCarsContent>
    </MyCarsContainer>
  );
}
