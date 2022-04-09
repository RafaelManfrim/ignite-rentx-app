import styled from 'styled-components/native'

export const HomeContainer = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;

    background: ${({ theme }) => theme.colors.shape_dark};
`

export const HomeTitle = styled.Text`
    color: ${({ theme }) => theme.colors.main};
    font-size: 36px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
`
