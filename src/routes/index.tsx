import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppTabRoutes } from './app.tab.routes';
import { AppAuthRoutes } from './auth.routes';
import { useAuth } from '../data/hooks/useAuth';

export function Routes() {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      {user.email ? <AppTabRoutes /> : <AppAuthRoutes />}
    </NavigationContainer>
  );
}
