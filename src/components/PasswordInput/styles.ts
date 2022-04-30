import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native'

interface ContainerProps {
  isFocused: boolean
}

export const PasswordInputContainer = styled.View`
  height: 56px;
  margin-bottom: 8px;
  flex-direction: row;
`

export const PasswordInputIconContainer = styled.View<ContainerProps>`
  width: 55px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin-right: 2px;

  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-width: 2px; 
    border-color: ${theme.colors.main};
  `}
`;

export const Icon = styled(Feather)``;

export const PasswordInputTextContainer = styled.TextInput<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding-left: 23px;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-width: 2px; 
    border-color: ${theme.colors.main};
  `}
`;

export const ChangePasswordVisibilityButton = styled.TouchableWithoutFeedback``