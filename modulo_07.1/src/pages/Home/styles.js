import styled, { keyframes, css } from 'styled-components';
import {darken} from 'polished';

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
  background: #f47b00;
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
      border-top: 2px solid #f47b00;
    }

    a {
      color: #f3f3f3d9;
      text-decoration: none;
    }


  }

  li:hover {
    transition: all 600ms;
    background-color: #f47b00;
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333333;
      margin-top: 5px;

    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #f47b00;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#f47b00')};
      }


      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: bold;
        text-align: center;
        font-weight: bold;
      }
    }

    .btn-redirect-cart {
      background: #f47b00;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      margin-top: 5px;
      padding: 12px;
      overflow: hidden;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#f47b00')};
      }

      >span {
        flex: auto;
        text-align: center;
        font-weight: bold;
      }
    }
  }

`;