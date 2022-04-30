import React, { useEffect, useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import Feather from '@expo/vector-icons/Feather';

import {
  InputContainer,
  InputIconContainer,
  Icon,
  InputTextContainer
} from './styles';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
  value?: string
}

export function Input({ iconName, value, ...rest }: InputProps) {
  const { colors } = useTheme()
  const [isFilled, setIsFilled] = useState(false)
  const [isInputFocused, setIsInputFocused] = useState(false)

  function handleInputFocus() {
    setIsInputFocused(true)
  }

  function handleInputBlur() {
    setIsInputFocused(false)
  }

  useEffect(() => {
    console.log(value)
    if (!isFilled && value) {
      setIsFilled(true)
    } else if (isFilled && !value) {
      setIsFilled(false)
    }
  }, [value])

  return (
    <InputContainer>
      <InputIconContainer isFocused={isInputFocused}>
        <Icon name={iconName} size={24} color={isFilled ? colors.main : colors.text_detail} />
      </InputIconContainer>
      <InputTextContainer
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isInputFocused}
      />
    </InputContainer>
  );
}
