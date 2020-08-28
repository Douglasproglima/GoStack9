import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber"/>
      <form action="">
        <input type="text" placeholder="Nome completo"/>
        <input type="email" placeholder="Informe o seu e-mail"/>
        <input type="password" placeholder="Informe a sua senha"/>

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
