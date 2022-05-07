import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const FirstStepContainer = styled.View`
  padding: 0 24px;
`

export const FirstStepHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(30)}px;
`

export const BulletsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FirstStepTitle = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
  margin-top: ${RFValue(60)}px;
`;

export const FirstStepSubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(25)}px;
  margin-top: ${RFValue(12)}px;
`;

export const FirstStepForm = styled.View`
  width: 100%;
  margin: ${RFValue(28)}px 0;
`;

export const FormTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: ${RFValue(16)}px;
`;

export const NextStepButtonContainer = styled.View`
  padding: 0 24px;
`