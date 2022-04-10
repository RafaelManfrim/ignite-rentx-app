import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const CarContainer = styled.View`
  background: ${({ theme }) => theme.colors.background_secondary};
  width: 100%;
  height: 126px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin-bottom: 16px;
`

export const InformationsContainer = styled.View``;

export const CarInformationsContainer = styled.View``;

export const CarBrand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const CarName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const ValueContainer = styled.View`
  align-items: center;
  flex-direction: row;

`;

export const RentPeriod = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const RentValueContainer = styled.View`
  margin-right: 24px;
`;

export const RentValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(15)}px;
`;

export const FuelContainer = styled.View`
  margin-top: 16px;
`;

export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`;
