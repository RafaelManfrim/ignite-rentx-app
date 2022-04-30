import styled, { css } from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize';

interface HeaderProps {
  isKeyboardVisible?: boolean;
}

export const SignInMainContainer = styled.View`
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const SignInHeader = styled.View<HeaderProps>`
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(100)}px;

  ${({ isKeyboardVisible }) => isKeyboardVisible && css`
    margin-top: ${getStatusBarHeight() + RFValue(135)}px;
  `}
`;

export const SignInTitle = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
`;

export const SignInSubTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${RFValue(25)}px;
  margin-top: ${RFValue(16)}px;
`;

export const InputsArea = styled.View`
  width: 100%;
  margin: ${RFValue(32)}px 0;
`

export const ButtonsArea = styled.View``;