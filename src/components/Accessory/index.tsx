import React from 'react';
import { SvgProps } from 'react-native-svg';

import { AccessoryContainer, AccessoryName } from './styles';

interface AcessoryProps {
  name: string;
  icon: React.FC<SvgProps>
}

export function Accessory({ name, icon: Icon }: AcessoryProps) {
  return (
    <AccessoryContainer>
      <Icon width={32} height={32} />
      <AccessoryName>{name}</AccessoryName>
    </AccessoryContainer>
  );
}
