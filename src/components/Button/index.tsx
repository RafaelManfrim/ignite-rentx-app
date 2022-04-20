import React from 'react';
import { ActivityIndicator } from 'react-native'
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { ButtonContainer, ButtonTitle } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({ title, color, enabled = true, loading = false, ...rest }: ButtonProps) {
  const { colors } = useTheme()

  return (
    <GestureHandlerRootView>
      <ButtonContainer
        color={color ? color : colors.main}
        enabled={enabled}
        style={{ opacity: (enabled === false || loading === true) ? .6 : 1 }}
        {...rest}
      >
        {loading ? (
          <ActivityIndicator color={colors.shape} size={24} />
        ) : (
          <ButtonTitle>{title}</ButtonTitle>
        )}
      </ButtonContainer>
    </GestureHandlerRootView>
  );
}
