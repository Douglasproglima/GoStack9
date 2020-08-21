import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';
import { Container, ProductTable, Total} from './style';

export default function Cart() {
  const total = useSelector(state => {
    return formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  });

  const cart = useSelector(state => {
    return state.cart.map((product) => ({
              ...product,
              subtotal: formatPrice(product.price * product.amount),
            }))
  });

  const dispatch =  useDispatch();
  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));;
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

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
                    <MdRemoveCircleOutline size={20} color="#f47b00" onClick={() => decrement(product)}/>
                  </button>
                  <input type="number" readOnly value={product.amount}/>
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#f47b00" onClick={() => increment(product)}/>
                  </button>
                </div>
              </td>
              <td>
                <strong style={{fontSize:18}}>{product.subtotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => dispatch(CartActions.removeFromCart(product.id))}>
                  <MdDelete size={25} color="#f47b00"/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}