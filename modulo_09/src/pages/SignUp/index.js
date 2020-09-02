import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.svg';
export default function SignUp() {

  function handleSubmit(data){
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber"/>
      <Form onSumit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo"/>
        <Input name="email" type="email" placeholder="Informe o seu e-mail"/>
        <Input name="password" type="password" placeholder="Informe a sua senha"/>

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
