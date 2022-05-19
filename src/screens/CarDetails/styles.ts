import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native'

export const CarDetailsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarDetailsHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

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

export const AboutCar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  text-align: justify;
  margin-top: 24px;
  line-height: ${RFValue(22)}px;
`;

export const CarAccessoriesContainer = styled.View`
  width: 100%;
  margin-top: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsFooter = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 24px 24px ${getBottomSpace() + 24}px;
`;