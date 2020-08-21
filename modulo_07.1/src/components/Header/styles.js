import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 35px 0;

  img {
    margin-left: 10px;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #ffffff;
    }

    span {
      font-size: 15px;
      color: #f47b00;
    }
  }
`;
