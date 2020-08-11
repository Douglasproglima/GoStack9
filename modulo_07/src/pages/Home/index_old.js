import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaGithub, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import Container from '../../components/Container';
import { Form, SumitButton, List } from './styles';

export default class Home extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  // Executa assim que o componente aparece na tela
  componentDidMount() {
    const repositories = localStorage.getItem('Repositorios');
    if(repositories)
      this.setState({repositories: JSON.parse(repositories)});
  }

// Executar sempre que houver alterações nas props ou estado
  componentDidUpdate(prevProps, prevState) {
    // this.prorps ou this.state
    if(prevState.repositories !== this.state.repositories)
      localStorage.setItem('Repositorios', JSON.stringify(this.state.repositories));
  }

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;
    const { data } = await api.get(`/repos/${newRepo}`);
    //const { data } = await api.get(`/characters/${newRepo}`);

    //GitHub
    const info = {
      name: data.full_name,
      author: data.owner.login,
      avatar: data.owner.avatar_url,
    };

    this.setState({
      repositories: [...repositories, info],
      newRepo: '',
      loading: false,
    });
    console.log(info);
  };

  render() {
    const { newRepo, repositories, loading } = this.state;

    return (
      <Container>
        <h1>
          <FaGithub size={21} />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />
          {/* o type="submit" foi passado através do styled component */}
          <SumitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SumitButton>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repositories.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}
