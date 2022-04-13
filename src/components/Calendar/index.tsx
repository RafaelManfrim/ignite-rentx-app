import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars'

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthsNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br'

export function Calendar() {
  const { colors, fonts } = useTheme()

  return (
    <CustomCalendar
      firstDay={1}
      minDate={String(new Date())}
      headerStyle={{
        backgroundColor: colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textDayFontFamily: fonts.primary_400,
        textDayHeaderFontFamily: fonts.primary_500,
        textDayHeaderFontSize: 12,
        textMonthFontFamily: fonts.secondary_600,
        textMonthFontSize: 18,
        monthTextColor: colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
      renderArrow={(direction) => (
        <Feather
          name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
          size={24}
          color={colors.text}
        />
      )}
    />
  );
}
