import React from 'react';
import { SvgProps } from 'react-native-svg';

import { AcessoryContainer, AcessoryName } from './styles';

interface AcessoryProps {
  name: string;
  icon: React.FC<SvgProps>
}

export function Acessory({ name, icon: Icon }: AcessoryProps) {
  return (
    <AcessoryContainer>
      <Icon width={32} height={32} />
      <AcessoryName>{name}</AcessoryName>
    </AcessoryContainer>
  );
}
