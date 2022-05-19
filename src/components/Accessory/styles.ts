import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

const cardSize = Dimensions.get('screen').width * 28 / 100

export const AccessoryContainer = styled.View`
  width: ${cardSize}px;
  height: ${cardSize}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
  padding: 16px;
  margin-bottom: 8px;
`

export const AccessoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  margin-top: 4px;
`