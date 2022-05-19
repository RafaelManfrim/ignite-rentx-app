import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface OptionProps {
  active: boolean
}

export const ProfileMainContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
`

export const ProfileHeader = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  height: ${RFPercentage(28)}px;

  padding: 0 24px;
  align-items: center;
`

export const ProfileHeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + 32}px;
`

export const ProfileHeaderTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`

export const ProfilePhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.shape};
`

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`

export const ProfileContent = styled.View`
  padding: 0 24px;
  margin-top: 128px;
`;

export const ProfileContentHeader = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.line};
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 24px;
`;

export const Option = styled.TouchableOpacity.attrs({ activeOpacity: 0.4 }) <OptionProps>`
  padding-bottom: 4px;

  ${({ theme, active }) => active && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `};
`;

export const OptionTitle = styled.Text<OptionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme, active }) => active ? theme.fonts.secondary_600 : theme.fonts.secondary_500};
  color: ${({ theme, active }) => active ? theme.colors.header : theme.colors.text_detail};
`;

export const ProfileContentContainer = styled.View``;

export const Content = styled.View``;
