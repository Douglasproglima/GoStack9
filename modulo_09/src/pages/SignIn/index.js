import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

// .shape pois os dados da função handleSubmit()
//  estão no forma de objeto
const schemaYup = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido.')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres.')
    .required('A senha é obrigatória'),
});

// A estilização das msg está no arquivo _layouts/auth/styles.js
export default function SignIn() {

  function handleSubmit(data){
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber"/>
      <Form schema={schemaYup} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Informe o seu e-mail"/>
        <Input name="password" type="password" placeholder="Informe a sua senha"/>

        <button type="submit">Entrar</button>
        <Link to="/register">Crie uma conta gratuita</Link>
      </Form>
    </>
  );
}
