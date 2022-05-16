import React from 'react';
import { BorderlessButtonProps, GestureHandlerRootView } from 'react-native-gesture-handler';

import { LogoutButtonContainer, LogoutButtonIcon } from './styles';

interface LogoutButtonProps extends BorderlessButtonProps {
  color: string;
}

export function LogoutButton({ color, ...rest }: LogoutButtonProps) {
  return (
    <GestureHandlerRootView>
      <LogoutButtonContainer {...rest}>
        <LogoutButtonIcon name='power' size={24} color={color} />
      </LogoutButtonContainer>
    </GestureHandlerRootView>
  );
}
