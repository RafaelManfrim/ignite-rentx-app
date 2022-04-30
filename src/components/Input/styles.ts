import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native'

interface ContainerProps {
  isFocused: boolean
}

export const InputContainer = styled.View`
  height: ${RFValue(56)}px;
  margin-bottom: 8px;
  flex-direction: row;
`

export const InputIconContainer = styled.View<ContainerProps>`
  width: ${RFValue(55)}px;
  height: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin-right: 2px;

  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-width: 2px; 
    border-bottom-color: ${theme.colors.main};
  `}
`;

export const Icon = styled(Feather)``;

export const InputTextContainer = styled.TextInput<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 0 23px;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  ${({ theme, isFocused }) => isFocused && css`
    border-bottom-width: 2px; 
    border-color: ${theme.colors.main};
  `}
`;
