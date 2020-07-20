import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Button from './components/TechList';

render(<Button>OK</Button>, document.getElementById('app'));
render(<App>OK</App>, document.getElementById('app'));