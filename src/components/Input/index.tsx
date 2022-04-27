import React from 'react';
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
}

export function Input({ iconName }: InputProps) {
  const { colors } = useTheme()

  return (
    <InputContainer>
      <InputIconContainer>
        <Icon name={iconName} size={24} color={colors.text_detail} />
      </InputIconContainer>
      <InputTextContainer>
      </InputTextContainer>
    </InputContainer>
  );
}
