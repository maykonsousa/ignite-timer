import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;

   
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

 
`;

export const DataList = styled.datalist`
  border:solid red 1px;

 & option {
  border: solid red 1px;
}

`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border:0;
  border-bottom: solid 2px ${({ theme }) => theme.colors['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${({ theme }) => theme.colors['gray-100']};
  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`;



export const TaskInput = styled(BaseInput)`
flex: 1;
&::-webkit-calendar-picker-indicator {
  display: none !important;
}
`;
export const MinutesInput = styled(BaseInput)`
width: 4rem;
`;

export const CountDownContainer = styled.div`
  flex:1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  font-family: 'Roboto Mono', monospace;
  color: ${({ theme }) => theme.colors['gray-100']};
  gap: 1rem;
  font-size: 10rem;
  line-height: 8rem;
  span {
    background-color: ${({ theme }) => theme.colors['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Divisor = styled.div`
width: 4rem;
padding: 2rem 0;
color: ${({ theme }) => theme.colors['green-500']};
display: flex;
justify-content: center;


`;

export const StartCountDownButton = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors['gray-100']};
  background-color: ${({ theme }) => theme.colors['green-500']};

  &:not(:disabled):hover{
    background-color: ${({ theme }) => theme.colors['green-700']};
  }

`;
