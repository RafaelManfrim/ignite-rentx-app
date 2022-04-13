import React from 'react';
import { useTheme } from 'styled-components';

import { Acessory } from '../../components/Acessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

import {
  CarDetailsContainer,
  CarDetailsHeader,
  CarImages,
  CarContent,
  Details,
  CarDescription,
  CarDetailBrand,
  CarDetailName,
  CarRent,
  CarRentPeriod,
  CarRentValue,
  AboutCar,
  CarAcessoriesContainer,
  DetailsFooter
} from './styles';

export function CarDetails() {
  const { colors } = useTheme()

  return (
    <CarDetailsContainer>
      <CarDetailsHeader>
        <BackButton color={colors.title} onPress={() => { }} />
      </CarDetailsHeader>
      <CarImages>
        <ImageSlider imagesUrl={['https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png', 'https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png', 'https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png', 'https://w7.pngwing.com/pngs/475/362/png-transparent-audi-sportback-concept-car-audi-a3-sportback-2015-audi-s3-audi-compact-car-sedan-car.png']} />
      </CarImages>
      <CarContent>
        <Details>
          <CarDescription>
            <CarDetailBrand>AUDI</CarDetailBrand>
            <CarDetailName>A3</CarDetailName>
          </CarDescription>
          <CarRent>
            <CarRentPeriod>AO DIA</CarRentPeriod>
            <CarRentValue>R$ 230,00</CarRentValue>
          </CarRent>
        </Details>
        <CarAcessoriesContainer>
          <Acessory name='Teste' icon={SpeedSvg} />
          <Acessory name='Teste' icon={AccelerationSvg} />
          <Acessory name='Teste' icon={ForceSvg} />
          <Acessory name='Teste' icon={GasolineSvg} />
          <Acessory name='Teste' icon={ExchangeSvg} />
          <Acessory name='Teste' icon={PeopleSvg} />
        </CarAcessoriesContainer>
        <AboutCar>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, consequuntur unde. Dolor deserunt ullam cumque veniam voluptatibus beatae! Ipsam exercitationem repellat laborum perferendis asperiores cum quam omnis, optio ea voluptate.
        </AboutCar>
      </CarContent>
      <DetailsFooter>
        <Button title='Confirmar' />
      </DetailsFooter>
    </CarDetailsContainer>
  );
}
