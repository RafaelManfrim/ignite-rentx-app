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
        {/* {imagesUrl.map((image, index) => (
          <CarImage source={{ uri: image }} resizeMode='contain' key={index} />
        ))} */}
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode='contain' />
      </CarImageWrapper>
    </ImageSliderContainer>
  );
}
