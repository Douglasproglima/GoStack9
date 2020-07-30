import React, { Component } from 'react';
//import { DiAtom } from 'react-icons/di';
import { FaPlus, FaGithub, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import { Container, Form, SumitButton } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

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
    const { newRepo, loading } = this.state;

    return (
      <Container>
        <h1>
          <FaGithub size={21} />
          Personagens
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
      </Container>
    );
  }
}
