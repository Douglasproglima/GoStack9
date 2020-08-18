import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaSpinner } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../utils/format.js';
import api from '../../services/api';
import Container from '../../components/Container';
import { ProductList } from './styles';
import * as CartActions from '../../store/modules/cart/actions';

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
    const { addToCart } = this.props;

    //Toda action necessita de um TYPE e o conteúdo
    addToCart(productparam);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
                  <MdAddShoppingCart size={16} color="#FFF" />{' '}
                  {amount[product.id] || 0}
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

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);