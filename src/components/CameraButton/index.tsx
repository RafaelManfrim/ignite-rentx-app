import React from 'react';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { CameraButtonContainer, CameraButtonIcon } from './styles';

interface CameraButtonProps extends RectButtonProps {
  color: string;
}

export function CameraButton({ color, ...rest }: CameraButtonProps) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CameraButtonContainer {...rest}>
        <CameraButtonIcon name='camera' size={RFValue(24)} color={color} />
      </CameraButtonContainer>
    </GestureHandlerRootView>
  );
}
