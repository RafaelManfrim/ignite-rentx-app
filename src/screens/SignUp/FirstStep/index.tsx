import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

import {
  FirstStepContainer,
  FirstStepHeader,
  BulletsContainer,
  FirstStepTitle,
  FirstStepSubTitle,
  FirstStepForm,
  FormTitle,
  NextStepButtonContainer
} from './styles';

export function FirstStep() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [driverLicense, setDriverLicense] = useState('')
  const { colors } = useTheme()
  const navigation = useNavigation()

  async function handleNextStep() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required('CNH é obrigatória'),
        email: Yup.string().email('Deve ser um email válido').required('E-mail é obrigatório'),
        name: Yup.string().required('Nome é obrigatório')
      })

      const stepData = { name, email, driverLicense }

      await schema.validate(stepData)

      navigation.navigate('SignUpSecondStep', { user: stepData })
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        return Alert.alert('Opa', err.message)
      }
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

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <FirstStepContainer>
          <FirstStepHeader>
            <BackButton color={colors.text_detail} onPress={() => navigation.goBack()} />
            <BulletsContainer>
              <Bullet active />
              <Bullet active={false} />
            </BulletsContainer>
          </FirstStepHeader>
          <FirstStepTitle>{!isKeyboardVisible && 'Crie sua \nconta'}</FirstStepTitle>
          <FirstStepSubTitle>
            {'Faça seu cadastro de \nforma rápida e fácil.'}
          </FirstStepSubTitle>
          <FirstStepForm>
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName='user'
              placeholder='Nome'
              value={name}
              onChangeText={setName}
            />
            <Input
              iconName='mail'
              placeholder='E-mail'
              keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
            />
            <Input
              iconName='credit-card'
              placeholder='CNH'
              keyboardType='numeric'
              value={driverLicense}
              onChangeText={setDriverLicense}
            />
          </FirstStepForm>
        </FirstStepContainer>
      </TouchableWithoutFeedback>
      <NextStepButtonContainer>
        <Button title='Próximo' enabled={true} onPress={handleNextStep} />
      </NextStepButtonContainer>
    </KeyboardAvoidingView>
  );
}
