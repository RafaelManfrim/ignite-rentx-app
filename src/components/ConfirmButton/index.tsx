import React from 'react';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

import { ConfirmButtonContainer, ConfirmButtonTitle } from './styles';

interface ConfirmButtonProps extends RectButtonProps {
  title: string;
}

export function ConfirmButton({ title, ...rest }: ConfirmButtonProps) {
  return (
    <GestureHandlerRootView>
      <ConfirmButtonContainer {...rest}>
        <ConfirmButtonTitle>{title}</ConfirmButtonTitle>
      </ConfirmButtonContainer>
    </GestureHandlerRootView>
  );
}
