import React, { useEffect, useState } from 'react';
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
  value?: string
}

export function PasswordInput({ iconName, value, ...rest }: InputProps) {
  const [isFilled, setIsFilled] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { colors } = useTheme()

  function handleInputFocus() {
    setIsInputFocused(true)
  }

  function handleInputBlur() {
    setIsInputFocused(false)
  }

  useEffect(() => {
    if (!isFilled && value) {
      setIsFilled(true)
    } else if (isFilled && !value) {
      setIsFilled(false)
    }
  }, [value])

  return (
    <PasswordInputContainer>
      <PasswordInputIconContainer isFocused={isInputFocused}>
        <Icon name={iconName} size={24} color={isFilled ? colors.main : colors.text_detail} />
      </PasswordInputIconContainer>
      <PasswordInputTextContainer
        {...rest}
        secureTextEntry={!isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isInputFocused}
        autoCorrect={false}
      />
      <PasswordInputIconContainer isFocused={isInputFocused}>
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
