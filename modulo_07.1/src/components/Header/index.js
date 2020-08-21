import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {MdShoppingBasket} from 'react-icons/md';
import {Container, Cart} from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartQtde = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="ProglimaShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartQtde} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#ffffff"  style={{marginRight: 15}}></MdShoppingBasket>
      </Cart>
    </Container>
  )
}