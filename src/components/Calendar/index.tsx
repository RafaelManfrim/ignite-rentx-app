import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { Calendar as CustomCalendar, LocaleConfig, CalendarProps } from 'react-native-calendars'
import { calendar_ptbr } from './localeConfig';

LocaleConfig.locales['pt-br'] = calendar_ptbr
LocaleConfig.defaultLocale = 'pt-br'

export interface DayProps {
  dateString: string
  day: number
  month: number
  year: number
  timestamp: number
}

export interface MarkedDates {
  [date: string]: {
    color: string
    textColor: string
    disabled?: boolean
    disableTouchEvents?: boolean
  }
}

export function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const { colors, fonts } = useTheme()

  return (
    <CustomCalendar
      firstDay={1}
      minDate={String(new Date())}
      markingType='period'
      markedDates={markedDates}
      onDayPress={onDayPress}
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
