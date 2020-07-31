import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  background: #2929299c;
  border-radius: 4px;
  box-shadow: 0 0 25px rgb(113 89 193 / 70%);
  padding: 30px;
  margin: 20px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1px;

    svg {
      margin-right: 10px;
    }
  }
`;

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

    & + li {
      border-top: 2px solid #7159c1b3;
    }

    a {
      color: #f3f3f3d9;
      text-decoration: none;
    }
  }
`;
