import React, { Component } from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';
//import Container from '../../components/Container';
import { Container, ProductTable,  Total} from './style';

export default  class Cart extends Component {

  render(){

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
            <tr>
              <td>
                <img
                  src="https://static.netshoes.com.br/produtos/tenis-adidas-vl-court-20-masculino/72/NQQ-0862-172/NQQ-0862-172_zoom2.jpg?ts=1581955412&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-adidas-vl-court-20-masculino/72/NQQ-0862-172/NQQ-0862-172_zoom2.jpg?ts=1581955412&?ims=1088x"
                  alt="Tênis "
                />
              </td>
              <td>
                <strong>Tênis Adidas Vl Court 2.0 Masculino - Preto e Cinza</strong>
                <span>R$ 164,99</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#f47b00"/>
                  </button>
                  <input type="number" readOnly value={2}/>
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#f47b00"/>
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 164,99</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={25} color="#f47b00"/>
                </button>
              </td>
            </tr>
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
}
