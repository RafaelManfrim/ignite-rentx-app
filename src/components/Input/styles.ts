import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const InputContainer = styled.View`
  height: 56px;
  margin-bottom: 8px;
  flex-direction: row;
`

export const InputIconContainer = styled.View`
  width: 55px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin-right: 2px;
`;

export const Icon = styled(Feather)``;

export const InputTextContainer = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 0 23px;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;
