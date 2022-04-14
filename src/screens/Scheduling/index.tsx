import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import {
  SchedulingContainer,
  SchedulingHeader,
  SchedulingHeaderTitle,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  SchedulingContent,
  SchedulingFooter
} from './styles';

export function Scheduling() {
  const navigation = useNavigation()
  const { colors } = useTheme()

  function handleSchedulingDetails() {
    navigation.navigate('SchedulingDetails')
  }

  return (
    <SchedulingContainer>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <SchedulingHeader>
        <BackButton color={colors.shape} onPress={() => navigation.goBack()} />
        <SchedulingHeaderTitle>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel.
        </SchedulingHeaderTitle>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected>12/04/2022</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </SchedulingHeader>
      <SchedulingContent>
        <Calendar />
      </SchedulingContent>
      <SchedulingFooter>
        <Button title='Confirmar' onPress={handleSchedulingDetails} />
      </SchedulingFooter>
    </SchedulingContainer>
  );
}
