import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface ButtonContainerProps {
  color: string;
}

interface ButtonTitleProps {
  light: boolean;
}

export const ButtonContainer = styled(RectButton)<ButtonContainerProps>`
  width: 100%;

  padding: 19px;
  align-items: center;
  justify-content: center;

  background-color: ${({ color }) => color};
`

export const ButtonTitle = styled.Text<ButtonTitleProps>`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme, light }) => light ? theme.colors.header : theme.colors.shape};
`