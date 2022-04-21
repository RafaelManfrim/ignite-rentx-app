import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import { ImageSliderContainer, ImageIndexes, ImageIndex, CarImageWrapper, CarImage } from './styles';

interface ImageSliderProps {
  imagesUrl: string[];
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
        {imagesUrl.map((_, index) => (
          <ImageIndex active={index === imageIndex} key={index} />
        ))}
      </ImageIndexes>
      <FlatList
        horizontal
        data={imagesUrl}
        keyExtractor={key => key}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        renderItem={({ item: image }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: image }} resizeMode='contain' />
          </CarImageWrapper>
        )}
      />
    </ImageSliderContainer>
  );
}
