import React from 'react';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

import { CameraButtonContainer, CameraButtonIcon } from './styles';

interface CameraButtonProps extends RectButtonProps {
  color: string;
}

export function CameraButton({ color, ...rest }: CameraButtonProps) {
  return (
    <GestureHandlerRootView>
      <CameraButtonContainer {...rest}>
        <CameraButtonIcon name='camera' size={24} color={color} />
      </CameraButtonContainer>
    </GestureHandlerRootView>
  );
}
