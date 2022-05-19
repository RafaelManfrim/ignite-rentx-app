import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native'

export const SchedulingDetailsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const SchedulingDetailsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const CarContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center'
  },
  showsVerticalScrollIndicator: false
})``;

export const Details = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 24px;
`;

export const CarDescription = styled.View``;

export const CarDetailBrand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const CarDetailName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
`;

export const CarRent = styled.View`
  align-items: flex-end;
`;

export const CarRentPeriod = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const CarRentValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(20)}px;
`;

export const CarAccessoriesContainer = styled.View`
  width: 100%;
  margin-top: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const SchedulingPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(40)}px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
`

export const CalendarIconContainer = styled.View`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};
`

export const DateInfo = styled.View``

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const DateValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(13)}px;
`

export const SchedulePriceContainer = styled.View`
  width: 100%;
  margin-top: 16px;
`

export const SchedulePriceLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`

export const SchedulePriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const RentalPriceQuota = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(13)}px;
`

export const RentalPriceTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(20)}px;
`

export const DetailsFooter = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;