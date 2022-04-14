import React from 'react';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { ButtonContainer, ButtonTitle } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  const { colors } = useTheme()

  return (
    <GestureHandlerRootView>
      <ButtonContainer color={color ? color : colors.main} {...rest}>
        <ButtonTitle>{title}</ButtonTitle>
      </ButtonContainer>
    </GestureHandlerRootView>
  );
}
