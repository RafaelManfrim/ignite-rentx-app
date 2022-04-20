import React from 'react';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { ButtonContainer, ButtonTitle } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
}

export function Button({ title, color, enabled = true, ...rest }: ButtonProps) {
  const { colors } = useTheme()

  return (
    <GestureHandlerRootView>
      <ButtonContainer
        color={color ? color : colors.main}
        enabled={enabled}
        style={{ opacity: enabled ? 1 : .6 }}
        {...rest}
      >
        <ButtonTitle>{title}</ButtonTitle>
      </ButtonContainer>
    </GestureHandlerRootView>
  );
}
