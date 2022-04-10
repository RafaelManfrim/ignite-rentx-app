import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const HomeContainer = styled.View`
    background: ${({ theme }) => theme.colors.background_primary};
    flex: 1;
`

export const HomeHeader = styled.View`
    background: ${({ theme }) => theme.colors.shape_dark};
    width: 100%;
    height: 113px;
    padding: 0 24px 32px;
    
    justify-content: flex-end;
`

export const HeaderContent = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const TotalCars = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const CarList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})``;