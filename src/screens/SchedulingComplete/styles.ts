import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const SchedulingCompleteContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
  padding-top: 80px;
`

export const SchedulingCompleteContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const SchedulingCompleteTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
`

export const SchedulingCompleteMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  text-align: center;
  line-height: 28px;
  margin-top: 16px;
`
export const SchedulingCompleteFooter = styled.View`
  width: 100%;
  align-items: center;
  padding: 64px 0;
`;