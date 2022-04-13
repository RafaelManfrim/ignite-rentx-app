import React from 'react';

import { ImageSliderContainer, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from './styles';

interface ImageSliderProps {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  return (
    <ImageSliderContainer>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>
      <CarImageWrapper>
        <CarImage source={{ uri: 'https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png' }} resizeMode='contain' />
      </CarImageWrapper>
    </ImageSliderContainer>
  );
}
