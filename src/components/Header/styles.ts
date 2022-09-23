import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    a{
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors['gray-100']};
      border-top: solid 3px transparent;
      border-bottom: solid 3px transparent;
      transition:  0.2s;

      &:hover{
        border-bottom: solid 3px ${({ theme }) => theme.colors['green-500']};
      }

      &.active{
        color: ${({ theme }) => theme.colors['green-500']};
      }
    }


  }
`;