import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format.js';
import api from '../../services/api';
import Container from '../../components/Container';
import { ProductList } from './styles';

export default class Home extends Component {

  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    this.setState({
      products: data
    });

  }

  render() {

    const { products } = this.state;

    return (
      <Container>
        <h1 style={{marginBottom: 25}}>
          <FaSpinner size={21} />
          HOME
        </h1>

        <ProductList>
          { products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormated}</span>
              <button type="button">
                <div>
                  <MdAddShoppingCart size={16} color="#f47b00"/> 3
                </div>

                <span>ADD AO CARRINHO</span>
              </button>
            </li>
          )) }

        </ProductList>
      </Container>
    );
  }
}
