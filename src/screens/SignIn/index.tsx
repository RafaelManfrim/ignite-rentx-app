import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation()
  const { colors } = useTheme()

  async function handleSignIn() {
    const schema = Yup.object().shape({
      email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
      password: Yup.string().required('Senha obrigatória')
    })

    try {
      await schema.validate({ email, password })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return Alert.alert(`Houve um erro`, err.message)
      } else {
        Alert.alert('Erro ao autenticar', 'Ocorreu um erro ao fazer login, verifique as credenciais.')
      }
    }
  }

  function handleNewAccount() {
    navigation.navigate('SignUpFirstStep')
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

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SignInMainContainer>
          <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
          <SignInHeader isKeyboardVisible={isKeyboardVisible}>
            <SignInTitle>{!isKeyboardVisible && 'Estamos \nquase lá'}</SignInTitle>
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
              onChangeText={setEmail}
              value={email}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={setPassword}
              value={password}
            />
          </InputsArea>
        </SignInMainContainer>
      </TouchableWithoutFeedback>
      <ButtonsArea>
        <Button
          title="Login"
          loading={false}
          enabled={true}
          onPress={handleSignIn}
          style={{ marginBottom: 8 }}
        />
        <Button
          title="Criar uma conta gratuíta"
          loading={false}
          enabled={true}
          onPress={handleNewAccount}
          color={colors.background_secondary}
          light
        />
      </ButtonsArea>
    </KeyboardAvoidingView>
  );
}
