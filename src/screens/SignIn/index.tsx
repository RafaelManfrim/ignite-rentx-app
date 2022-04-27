import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {
  SignInMainContainer,
  SignInHeader,
  SignInTitle,
  SignInSubTitle,
  InputsArea,
  ButtonsArea
} from './styles';

export function SignIn() {
  const { colors } = useTheme()

  return (
    <SignInMainContainer>
      <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
      <SignInHeader>
        <SignInTitle>{'Estamos \nquase lá'}</SignInTitle>
        <SignInSubTitle>
          {'Faça seu login para começar \numa experiência incrível.'}
        </SignInSubTitle>
      </SignInHeader>
      <InputsArea>
        <Input iconName="mail" />
        <Input iconName="mail" />
      </InputsArea>
      <ButtonsArea>
        <Button
          title="Login"
          loading={false}
          enabled={true}
          onPress={() => { }}
          style={{ marginBottom: 8 }}
        />
        <Button
          title="Criar uma conta gratuíta"
          loading={false}
          enabled={true}
          onPress={() => { }}
          color={colors.background_secondary}
          light
        />
      </ButtonsArea>
    </SignInMainContainer>
  );
}
