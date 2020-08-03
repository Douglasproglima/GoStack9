import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
  }
`;

//Animação para girar o ícone de loader
const rotate = keyframes`
  from {
    transfom: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SumitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 8px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List =  styled.ul`
  list-style: 15px 0;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #f3f3f3d9;
    transition: all 600ms;

    & + li {
      border-top: 2px solid #7159c1b3;
    }

    a {
      color: #f3f3f3d9;
      text-decoration: none;
    }


  }

  li:hover {
    transition: all 600ms;
    background-color: #7159c1b3;
  }
`;
