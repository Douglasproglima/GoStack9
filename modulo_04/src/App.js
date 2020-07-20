import React from 'react';
import './App.css';
import TechList from './components/TechList';
import profile from './assets/images/07.jpg';

export default function App() {
  //return <img src={profile} />
  return <TechList></TechList>
}

export function Button() {
  return <button>OK</button>
}