import React from 'react';
import { ActivityIndicator } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { ButtonContainer, ButtonTitle } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  light?: boolean
  loading?: boolean;
  enabled?: boolean;
}

export function Button({ title, color, light = false, enabled = true, loading = false, style, ...rest }: ButtonProps) {
  const { colors } = useTheme()

  return (
    <ButtonContainer
      color={color ? color : colors.main}
      style={[{ opacity: (enabled === false || loading === true) ? .6 : 1 }, style]}
      enabled={enabled}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={colors.shape} size={24} />
      ) : (
        <ButtonTitle light={light}>{title}</ButtonTitle>
      )}
    </ButtonContainer>
  );
}
