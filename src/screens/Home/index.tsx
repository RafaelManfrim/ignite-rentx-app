import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler, StatusBar, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring
} from 'react-native-reanimated'

import { api } from '../../services/api';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { Loading } from '../../components/Loading';
import { LoadAnimation } from '../../components/LoadAnimation';

import { HomeContainer, HomeHeader, HeaderContent, TotalCars, CarList } from './styles';
import { CarDTO } from '../../dtos/CarDTO';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()
  const { colors } = useTheme()
  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value }
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },
    onActive(event, ctx: any) {
      positionX.value = event.translationX + ctx.positionX
      positionY.value = event.translationY + ctx.positionY
    },
    onEnd() {
      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    }
  })

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

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
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
          <Car brand={item.brand} name={item.name} rent={item.rent} thumbnail={item.thumbnail} fuel_type={item.fuel_type} onPress={() => handleCarDetails(item)} />
        )} />
      )}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[myCarsButtonStyle, {
          position: 'absolute',
          bottom: 22,
          right: 22,
        }]}>
          <ButtonAnimated
            onPress={() => handleOpenMyCars()}
            style={[styles.myCarsButtonVisual, { backgroundColor: colors.main }]}
          >
            <Ionicons name="ios-car-sport" size={28} color={colors.shape} />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </HomeContainer>
  );
}

const styles = StyleSheet.create({
  myCarsButtonVisual: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
