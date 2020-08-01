import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../../services/api';
import Container from '../../components/Container';
import { Loading, Owner } from './style';

export default  class Repository extends Component {

  //Defini duas propriedades, uma match e outra params, como a match
  //é obrigatória params também será por estar dentro do escopo
  static propTypes = {
    match: PropTypes.shape({ //.shape: usado para definir uma propriedade do tipo Objeto
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  }

  state = {
    repository: {},
    issues: [],
    loading: true,
  }

  async componentDidMount() {
    const {match} = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        }
      })
    ]);
    console.log(repository);
    console.log(issues);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render(){
    const {repository, issues, loading} = this.state;
    if(loading)
      return <Loading>Carregando...</Loading>

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar</Link>
          <img src={repository.owner.avatar_url}></img>
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
      </Container>
    );
  };
}
