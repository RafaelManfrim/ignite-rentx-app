import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, DayProps, MarkedDates } from '../../components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { SchedulingParams } from '../../routes/stack.routes';
import { getPlatformDate } from '../../utils/getPlatformDate';

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

interface RentalPeriodState {
  startFormatted: string
  endFormatted: string
}

export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
  const [marketDates, setMarketDates] = useState<MarkedDates>({} as MarkedDates)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodState>({} as RentalPeriodState)
  const navigation = useNavigation()
  const { colors } = useTheme()
  const route = useRoute()
  const { car } = route.params as SchedulingParams

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if (start.timestamp > end.timestamp) {
      let aux = start
      start = end
      end = aux
    }

    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarketDates(interval)

    const firstDate = Object.keys(interval)[0]
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
    })
  }

  function handleConfirmPeriod() {
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(marketDates)
    })
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
            <DateValue selected={!!rentalPeriod.startFormatted}>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </SchedulingHeader>
      <SchedulingContent>
        <Calendar markedDates={marketDates} onDayPress={handleChangeDate} />
      </SchedulingContent>
      <SchedulingFooter>
        <Button
          title='Confirmar'
          onPress={handleConfirmPeriod}
          enabled={!!rentalPeriod.endFormatted}
        />
      </SchedulingFooter>
    </SchedulingContainer>
  );
}
