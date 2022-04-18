import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import { api } from '../../services/api';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { Loading } from '../../components/Loading';

import { HomeContainer, HomeHeader, HeaderContent, TotalCars, CarList, MyCarsButton } from './styles';
import { CarDTO } from '../../dtos/CarDTO';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()
  const { colors } = useTheme()

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car })
  }

  function handleOpenMyCars() {
    navigation.navigate("MyCars")
  }

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await api.get("/cars")
        setCars(response.data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    loadCars()
  }, [])

  return (
    <HomeContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <HomeHeader>
        <HeaderContent>
          <Logo height={RFValue(12)} width={RFValue(108)} />
          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </HomeHeader>
      {loading ? (
        <Loading />
      ) : (
        <CarList data={cars} keyExtractor={item => item.id} renderItem={({ item }) => (
          <Car brand={item.brand} name={item.name} rent={item.rent} thumbnail={item.thumbnail} fuel_type={item.fuel_type} onPress={() => handleCarDetails(item)} />
        )} />
      )}
      <MyCarsButton onPress={() => handleOpenMyCars()}>
        <Ionicons name="ios-car-sport" size={28} color={colors.shape} />
      </MyCarsButton>
    </HomeContainer>
  );
}
