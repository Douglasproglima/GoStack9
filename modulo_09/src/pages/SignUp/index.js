import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schemaYup = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('E-mail inválido.').required('O e-mail é obrigatório'),
  password: Yup.string().min(6, 'A senha deve contér pelo ao menos 6 caracteres').required('A senha é obrigatória.'),
});

export default function SignUp() {

  function handleSubmit(data){
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber"/>
      <Form schema={schemaYup} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo"/>
        <Input name="email" type="email" placeholder="Informe o seu e-mail"/>
        <Input name="password" type="password" placeholder="Informe a sua senha"/>

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
