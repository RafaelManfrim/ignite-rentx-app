import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import Feather from '@expo/vector-icons/Feather';

import {
  PasswordInputContainer,
  PasswordInputIconContainer,
  Icon,
  PasswordInputTextContainer,
  ChangePasswordVisibilityButton
} from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput({ iconName, ...rest }: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { colors } = useTheme()

  return (
    <PasswordInputContainer>
      <PasswordInputIconContainer>
        <Icon name={iconName} size={24} color={colors.text_detail} />
      </PasswordInputIconContainer>
      <PasswordInputTextContainer {...rest} secureTextEntry={!isPasswordVisible} />
      <PasswordInputIconContainer>
        <ChangePasswordVisibilityButton onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Icon
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={isPasswordVisible ? colors.main : colors.text_detail}
          />
        </ChangePasswordVisibilityButton>
      </PasswordInputIconContainer>
    </PasswordInputContainer>
  );
}
