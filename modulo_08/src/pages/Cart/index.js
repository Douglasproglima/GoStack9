import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';
import Container from '../../components/Container';
import { Loading, Owner, IssuesList } from './style';

export default  class Cart extends Component {

  render(){

    return (
      <Container>
        <h1>CART</h1>
      </Container>
    );
  };
}
