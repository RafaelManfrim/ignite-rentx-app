import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ButtonContainer, ButtonTitle } from './styles';

interface ButtonProps {
  title: string;
  color?: string;
  // onPress: () => void
}

export function Button({ title, color, ...rest }: ButtonProps) {
  return (
    <GestureHandlerRootView>
      <ButtonContainer {...rest} color={color}>
        <ButtonTitle>{title}</ButtonTitle>
      </ButtonContainer>
    </GestureHandlerRootView>
  );
}
