import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber"/>
      <form action="">
        <input type="email" placeholder="Informe o seu e-mail"/>
        <input type="password" placeholder="Informe a sua senha"/>

        <button type="submit">Entrar</button>
        <Link to="/register">Crie uma conta gratuita</Link>
      </form>
    </>
  );
}
