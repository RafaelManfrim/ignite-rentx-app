import React from 'react';
import { useTheme } from 'styled-components';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

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
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SignInMainContainer>
          <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
          <SignInHeader>
            <SignInTitle>{'Estamos \nquase lá'}</SignInTitle>
            <SignInSubTitle>
              {'Faça seu login para começar \numa experiência incrível.'}
            </SignInSubTitle>
          </SignInHeader>
          <InputsArea>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType='email-address'
              autoCorrect={false}
              autoCapitalize='none'
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize='none'
            />
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
