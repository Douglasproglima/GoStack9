import styled from 'styled-components';
import {darken} from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-145deg, #424249, #ff8039, #424249);
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
      background: rgba(0,0,0,0.1);
      border: 0;
      border-radius: 4px;
      height: 40px;
      padding:0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7)
      }
    }

    button {
      margin: 5px 0 0;
      height: 40px;
      background: #d84e00;
      font-weight: bold;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: ${darken(0.05, '#d84e00')}
      }

    }
  }
`;