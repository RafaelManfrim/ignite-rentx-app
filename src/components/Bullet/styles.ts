import styled from 'styled-components/native'

interface BulletContainerProps {
  active?: boolean
}

export const BulletContainer = styled.View<BulletContainerProps>`
  width: 6px;
  height: 6px;
  background-color: ${({ theme, active }) => (
    active ? theme.colors.title : theme.colors.shape
  )};
  border-radius: 3px;
  margin-left: 4px;
`
