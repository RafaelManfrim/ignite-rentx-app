import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import Feather from '@expo/vector-icons/Feather'
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';

import { useAuth } from '../../data/hooks/useAuth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { PasswordInput } from '../../components/PasswordInput';

import {
  ProfileMainContainer,
  ProfileHeader,
  ProfileHeaderTop,
  ProfileHeaderTitle,
  LogoutButton,
  ProfilePhotoContainer,
  Photo,
  CameraButton,
  ProfileContent,
  ProfileContentHeader,
  Option,
  OptionTitle,
  ProfileContentContainer,
  Content
} from './styles';

export function Profile() {
  const { user, signOut } = useAuth()

  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit')
  const [avatar, setAvatar] = useState(user.avatar)
  const [name, setName] = useState(user.name)
  const [driverLicense, setDriverLicense] = useState(user.driver_license)

  const { colors } = useTheme()
  const navigation = useNavigation()

  async function handleSelectAvatar() {
    console.log('entrou aqui')
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    })

    if (result.cancelled) {
      return
    }

    if (result.uri) {
      setAvatar(result.uri)
    }
  }

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ProfileMainContainer>
          <ProfileHeader>
            <ProfileHeaderTop>
              <BackButton color={colors.shape} onPress={handleGoBack} />
              <ProfileHeaderTitle>Editar Perfil</ProfileHeaderTitle>
              <LogoutButton onPress={signOut}>
                <Feather size={24} color={colors.shape} name='power' />
              </LogoutButton>
            </ProfileHeaderTop>
            <ProfilePhotoContainer>
              {!!avatar && <Photo source={{ uri: avatar }} />}
              <CameraButton onPress={handleSelectAvatar}>
                <Feather size={24} color={colors.shape} name='camera' />
              </CameraButton>
            </ProfilePhotoContainer>
          </ProfileHeader>
          <ProfileContent>
            <ProfileContentHeader>
              <Option active={option === 'dataEdit'} onPress={() => setOption('dataEdit')}>
                <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
              </Option>
              <Option active={option === 'passwordEdit'} onPress={() => setOption('passwordEdit')}>
                <OptionTitle active={option === 'passwordEdit'}>Trocar senha</OptionTitle>
              </Option>
            </ProfileContentHeader>
            <ProfileContentContainer style={{ marginBottom: useBottomTabBarHeight() }}>
              {option === 'dataEdit' ? (
                <Content>
                  <Input
                    iconName='user'
                    placeholder='Nome'
                    autoCorrect={false}
                    defaultValue={name}
                    onChangeText={setName}
                  />
                  <Input
                    iconName='mail'
                    autoCorrect={false}
                    editable={false}
                    defaultValue={user.email}
                  />
                  <Input
                    iconName='credit-card'
                    placeholder='CNH'
                    keyboardType='numeric'
                    defaultValue={driverLicense}
                    onChangeText={setDriverLicense}
                  />
                </Content>
              ) : (
                <Content>
                  <PasswordInput
                    iconName='lock'
                    placeholder='Senha atual'
                  />
                  <PasswordInput
                    iconName='lock'
                    placeholder='Nova senha'
                  />
                  <PasswordInput
                    iconName='lock'
                    placeholder='Repetir senha'
                  />
                </Content>
              )}
              <Button title='Confirmar' />
            </ProfileContentContainer>
          </ProfileContent>
        </ProfileMainContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
