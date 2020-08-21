import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  padding: 30px;
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

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #f47b00;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#f47b00')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #f47b00;
    font-size: 18px;
    text-align: left;
    padding: 12px;
  }

  hr {
      color: #f47b00;
      width: 100%;
    }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #f47b00;
  }

  img {
    height: 100px;
  }

  strong {
    color: #ffffff;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      text-align: center;
      border: 1px solid #dddddd;
      border-radius: 4px;
      color: #666666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #ffffff;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* vh: Altura Total da Tela */
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #fff;
    background-color: #f47b00;
    padding: 7px 30px;
    border-radius: 16px;
    font-size: 16px;
    text-decoration: none;
  }

  a:hover {
    color: #ffffffeb;
    background-color: #f47b00;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssuesList = styled.ul`
  color: #fff;
  margin-top: 30px;
  padding-top: 30px;
  border-style:1px solid;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #f47b00;

    &+ li {
      margin-top: 10px;
    }

    img {
      width:36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #f47b00;
    }

    div {
      flex: 1;
      margin-left: 15px;
    }

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color:#fff;

        &:hover {
          color: #f47b00;
        }
      }

      span: {
        background: #d22626;
        color: #fff;
        border-radios: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;

      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }

`;