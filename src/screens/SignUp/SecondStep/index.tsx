import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';

import { SignUpSecondStepParams } from '../../../routes/stack.routes';

import {
  SecondStepContainer,
  FirstStepHeader,
  BulletsContainer,
  FirstStepTitle,
  FirstStepSubTitle,
  FirstStepForm,
  FormTitle,
  SignUpButtonContainer
} from './styles';

export function SecondStep() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [identicalPasswords, setIdenticalPasswords] = useState(false)
  const { colors } = useTheme()
  const navigation = useNavigation()
  const route = useRoute()

  const { user } = route.params as SignUpSecondStepParams

  async function handleRegister() {
    // Enviar para api
    try {
      navigation.navigate('Confirmation', {
        title: 'Conta criada',
        message: `Agora é só fazer login \ne aproveitar.`,
        nextScreen: 'SignIn'
      })
    } catch (err) {

    }
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (!!password && !!passwordConfirm && password === passwordConfirm) {
      setIdenticalPasswords(true)
    } else {
      setIdenticalPasswords(false)
    }
  }, [password, passwordConfirm])

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SecondStepContainer>
          <FirstStepHeader>
            <BackButton color={colors.text_detail} onPress={() => navigation.goBack()} />
            <BulletsContainer>
              <Bullet active={false} />
              <Bullet active />
            </BulletsContainer>
          </FirstStepHeader>
          <FirstStepTitle>{!isKeyboardVisible && 'Crie sua \nconta'}</FirstStepTitle>
          <FirstStepSubTitle>
            {'Faça seu cadastro de \nforma rápida e fácil.'}
          </FirstStepSubTitle>
          <FirstStepForm>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              iconName='lock'
              placeholder='Senha'
              value={password}
              onChangeText={setPassword}
            />
            <PasswordInput
              iconName='lock'
              placeholder='Repetir senha'
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
          </FirstStepForm>
        </SecondStepContainer>
      </TouchableWithoutFeedback>
      <SignUpButtonContainer>
        <Button
          title={'Cadastrar'}
          enabled={identicalPasswords}
          color={identicalPasswords ? colors.success : colors.main}
          onPress={handleRegister}
        />
      </SignUpButtonContainer>
    </KeyboardAvoidingView>
  );
}
