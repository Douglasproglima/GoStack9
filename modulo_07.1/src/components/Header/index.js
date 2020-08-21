import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {MdShoppingBasket} from 'react-icons/md';
import {Container, Cart} from './styles';
import logo from '../../assets/images/logo.svg';

function Header({cartQtde}) {
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

export default connect(state => ({
  cartQtde: state.cart.length, //Vem do rootReducer

}))(Header);