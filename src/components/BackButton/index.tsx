import React from 'react';
import { BorderlessButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler';

import { BackButtonContainer, BackButtonIcon } from './styles';

interface BackButtonProps extends BorderlessButtonProps {
  color: string;
}

export function BackButton({ color, ...rest }: BackButtonProps) {
  return (
    <GestureHandlerRootView>
      <BackButtonContainer {...rest}>
        <BackButtonIcon name='chevron-left' size={24} color={color} />
      </BackButtonContainer>
    </GestureHandlerRootView>
  );
}
