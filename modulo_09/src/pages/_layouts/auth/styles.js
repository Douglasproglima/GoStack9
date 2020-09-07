import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-145deg, #424249, #ff8039, #424249) no-repeat
    center;
  /* background: #424249 no-repeat center; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.4);
      border: 10px;
      border-block-color: #d84e00;
      border-radius: 8px;
      height: 40px;
      padding: 0 18px;
      color: #ffffff;
      font-size: 14px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #06b1e88c;
      font-size: 14px;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 40px;
      /* background: #d84e00; */
      background: linear-gradient(to right, #EB3349 0%, #F45C43 51%, #EB3349 100%);
      font-weight: bold;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        /* background: ${darken(0.05, '#d84e00')}; */
        background: linear-gradient(to right, #EB3349 0%, #F45C43 55%, #EB3349 100%);
        background-position: right center;
      }
  }

  a {
      text-decoration: none;
      font-size: 16px;
      margin-top: 15px;
      font-weight: bold;
      color: #ffffff;
      opacity: 0.8;
      transition: background 0.5s;

      &:hover {
        opacity: 1;
      }
    }
`;
