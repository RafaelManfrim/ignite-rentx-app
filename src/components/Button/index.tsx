import React from 'react';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

import { ButtonContainer, ButtonTitle } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <GestureHandlerRootView>
      <ButtonContainer color={color} {...rest}>
        <ButtonTitle>{title}</ButtonTitle>
      </ButtonContainer>
    </GestureHandlerRootView>
  );
}
