import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import * as Yup from 'yup'
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';

import { useAuth } from '../../data/hooks/useAuth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { PasswordInput } from '../../components/PasswordInput';
import { LogoutButton } from '../../components/LogoutButton';
import { CameraButton } from '../../components/CameraButton';

import {
  ProfileMainContainer,
  ProfileHeader,
  ProfileHeaderTop,
  ProfileHeaderTitle,
  ProfilePhotoContainer,
  Photo,
  ProfileContent,
  ProfileContentHeader,
  Option,
  OptionTitle,
  ProfileContentContainer,
  Content
} from './styles';

export function Profile() {
  const { user, signOut, updateUser } = useAuth()

  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit')
  const [driverLicense, setDriverLicense] = useState(user.driver_license)
  const [avatar, setAvatar] = useState(user.avatar)
  const [name, setName] = useState(user.name)

  const { colors } = useTheme()
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  async function handleSelectAvatar() {
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

  async function handleProfileUpdate() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatória"),
        name: Yup.string().required("Nome é obrigatório.")
      })

      const data = { name, driverLicense }
      
      await schema.validate(data)

      await updateUser({
        id: user.id,
        user_id: user.user_id,
        email: user.email,
        name,
        driver_license: driverLicense,
        avatar,
        token: user.token
      })

      Alert.alert('Sucesso!', 'Seu perfil foi atualizado')

    } catch (err) {
      Alert.alert('Não foi possivel atualizar o perfil')
    }
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ProfileMainContainer>
          <ProfileHeader>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <ProfileHeaderTop>
              <BackButton color={colors.shape} onPress={handleGoBack} />
              <ProfileHeaderTitle>Editar Perfil</ProfileHeaderTitle>
              <LogoutButton color={colors.shape} onPress={signOut} />
            </ProfileHeaderTop>
            <ProfilePhotoContainer>
              {!!avatar && <Photo source={{ uri: avatar }} />}
              <CameraButton color={colors.shape} onPress={handleSelectAvatar} />
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
              <Button title='Salvar alterações' onPress={handleProfileUpdate} />
            </ProfileContentContainer>
          </ProfileContent>
        </ProfileMainContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
