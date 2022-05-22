import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const CameraButtonContainer = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.main};
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 8px;
  right: 8px;
  border-radius: 4px;
`

export const CameraButtonIcon = styled(Feather)``;
