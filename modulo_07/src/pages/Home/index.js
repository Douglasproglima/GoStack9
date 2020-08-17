import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format.js';
import api from '../../services/api';
import Container from '../../components/Container';
import { ProductList } from './styles';

export class Home extends Component {

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

  handleAddProduct = productparam => {
    //this.props.dispatch: Dispara uma ação para o redux
    const { dispatch } = this.props;

    //Toda action necessita de um TYPE e o conteúdo
    dispatch({
      type: 'ADD_TO_CART',
      productparam,
    });
  };

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
              <button type="button" onClick={() => this.handleAddProduct(product)}>
                <div>
                  <MdAddShoppingCart size={16} color="#f47b00" /> 3
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

export default connect()(Home);