import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { api } from '../../services/api';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { LoadAnimation } from '../../components/LoadAnimation';

import { HomeContainer, HomeHeader, HeaderContent, TotalCars, CarList } from './styles';
import { CarDTO } from '../../dtos/CarDTO';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car })
  }

  useEffect(() => {
    let isMounted = true


    async function loadCars() {
      try {
        const response = await api.get("/cars")
        if (isMounted) {
          setCars(response.data)
        }
      } catch (err) {
        console.log(err)
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadCars()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <HomeContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <HomeHeader>
        <HeaderContent>
          <Logo height={RFValue(12)} width={RFValue(108)} />
          {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </HomeHeader>
      {loading ? (
        <LoadAnimation />
      ) : (
        <CarList data={cars} keyExtractor={item => item.id} renderItem={({ item }) => (
          <Car brand={item.brand} name={item.name} rent={{ period: item.period, price: item.price }} thumbnail={item.thumbnail} fuel_type={item.fuel_type} onPress={() => handleCarDetails(item)} />
        )} />
      )}
    </HomeContainer>
  );
}
