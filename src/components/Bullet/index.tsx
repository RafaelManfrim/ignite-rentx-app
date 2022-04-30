import React from 'react';

import { BulletContainer } from './styles';

interface BulletProps {
  active: boolean;
}

export function Bullet({ active }: BulletProps) {
  return (
    <BulletContainer active={active} />
  );
}
