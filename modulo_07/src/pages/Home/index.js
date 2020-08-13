import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import Container from '../../components/Container';
import { ProductList } from './styles';

export default class Home extends Component {
  render() {

    return (
      <Container>
        <h1 style={{marginBottom: 25}}>
          <FaSpinner size={21} />
          HOME
        </h1>

        <ProductList>
          <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-globe-se-814-masculino/26/D22-3837-026/D22-3837-026_zoom1.jpg?ts=1595354797&ims=326x" alt="Product"></img>
            <strong>Tênis Olympikus Globe Se 814 Masculino</strong>
            <span>R$ 129,99</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#f47b00"/> 3
              </div>

              <span>ADD AO CARRINHO</span>
            </button>
          </li>

          <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-globe-se-814-masculino/26/D22-3837-026/D22-3837-026_zoom1.jpg?ts=1595354797&ims=326x" alt="Product"></img>
            <strong>Tênis Olympikus Globe Se 814 Masculino</strong>
            <span>R$ 129,99</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#f47b00"/> 3
              </div>

              <span>ADD AO CARRINHO</span>
            </button>
          </li>

          <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-globe-se-814-masculino/26/D22-3837-026/D22-3837-026_zoom1.jpg?ts=1595354797&ims=326x" alt="Product"></img>
            <strong>Tênis Olympikus Globe Se 814 Masculino</strong>
            <span>R$ 129,99</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#f47b00"/> 3
              </div>

              <span>ADD AO CARRINHO</span>
            </button>
          </li>

          <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-olympikus-globe-se-814-masculino/26/D22-3837-026/D22-3837-026_zoom1.jpg?ts=1595354797&ims=326x" alt="Product"></img>
            <strong>Tênis Olympikus Globe Se 814 Masculino</strong>
            <span>R$ 129,99</span>
            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#f47b00"/> 3
              </div>

              <span>ADD AO CARRINHO</span>
            </button>
          </li>
        </ProductList>
      </Container>
    );
  }
}
