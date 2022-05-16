import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const CameraButtonContainer = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.main};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 128px;
  right: 0;
  border-radius: 4px;
`

export const CameraButtonIcon = styled(Feather)``;
