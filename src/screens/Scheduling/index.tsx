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
  const { colors } = useTheme()

  return (
    <SchedulingContainer>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <SchedulingHeader>
        <BackButton color={colors.shape} />
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
        <Button title='Confirmar' />
      </SchedulingFooter>
    </SchedulingContainer>
  );
}
