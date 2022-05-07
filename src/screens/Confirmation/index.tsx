import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar, useWindowDimensions } from 'react-native';

import BrandSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import { ConfirmationParams } from '../../routes/stack.routes';

import {
  ConfirmationContainer,
  ConfirmationContent,
  ConfirmationTitle,
  ConfirmationMessage,
  ConfirmationFooter
} from './styles';

export function Confirmation() {
  const navigation = useNavigation()
  const { width } = useWindowDimensions()
  const route = useRoute()

  const { title, message, nextScreen } = route.params as ConfirmationParams

  return (
    <ConfirmationContainer>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <BrandSvg width={width} />
      <ConfirmationContent>
        <DoneSvg />
        <ConfirmationTitle>{title}</ConfirmationTitle>
        <ConfirmationMessage>
          {message}
        </ConfirmationMessage>
        <ConfirmationFooter>
          <ConfirmButton title="OK" onPress={() => navigation.navigate(nextScreen)} />
        </ConfirmationFooter>
      </ConfirmationContent>
    </ConfirmationContainer>
  );
}
