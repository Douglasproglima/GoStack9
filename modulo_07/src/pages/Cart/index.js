import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable,  Total} from './style';

function Cart({ cart, removeFromCart }) {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>PRODUTO</th>
            <th>QTDE.</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#f47b00" onClick={() => {}}/>
                  </button>
                  <input type="number" readOnly value={product.amount}/>
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#f47b00" onClick={() => {}}/>
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 164,99</strong>
              </td>
              <td>
                <button type="button" onClick={() => removeFromCart(product.id)}>
                  <MdDelete size={25} color="#f47b00"/>
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 329,00</strong>
        </Total>
      </footer>
    </Container>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);