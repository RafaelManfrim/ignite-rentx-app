import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { Photo } from '../../dtos/CarDTO';
import { Bullet } from '../Bullet';

import { ImageSliderContainer, ImageIndexes, CarImageWrapper, CarImage } from './styles';

interface ImageSliderProps {
  imagesUrl: Photo[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index
    setImageIndex(index!)
  })

  return (
    <ImageSliderContainer>
      <ImageIndexes>
        {imagesUrl.map((item, index) => (
          <Bullet active={index === imageIndex} key={item.id} />
        ))}
      </ImageIndexes>
      <FlatList
        horizontal
        data={imagesUrl}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        renderItem={({ item: item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item.photo }} resizeMode='contain' />
          </CarImageWrapper>
        )}
      />
    </ImageSliderContainer>
  );
}
