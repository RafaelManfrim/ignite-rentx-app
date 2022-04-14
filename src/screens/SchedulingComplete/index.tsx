import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, useWindowDimensions } from 'react-native';

import BrandSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import {
  SchedulingCompleteContainer,
  SchedulingCompleteContent,
  SchedulingCompleteTitle,
  SchedulingCompleteMessage,
  SchedulingCompleteFooter
} from './styles';


export function SchedulingComplete() {
  const navigation = useNavigation()
  const { width } = useWindowDimensions()

  return (
    <SchedulingCompleteContainer>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <BrandSvg width={width} />
      <SchedulingCompleteContent>
        <DoneSvg />
        <SchedulingCompleteTitle>Carro alugado!</SchedulingCompleteTitle>
        <SchedulingCompleteMessage>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </SchedulingCompleteMessage>
        <SchedulingCompleteFooter>
          <ConfirmButton title="OK" onPress={() => navigation.navigate('Home')} />
        </SchedulingCompleteFooter>
      </SchedulingCompleteContent>
    </SchedulingCompleteContainer>
  );
}
