import React, {useState} from 'react';
/*
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './style/global';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle></GlobalStyle>
    </BrowserRouter>
  );
}
*/

function App() {
  const [tech, setTech] = useState([
    'React',
    'React Native'
  ]);

  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
  }

  return (
    <>
      <ul>
        {tech.map(t => (<li key={t}>{t}</li>))}
      </ul>
      <input type="text" value={newTech} onChange={e => setNewTech(e.target.value)}/>
      <button type="button" onClick={handleAdd}>ADD</button>
    </>
  );
}

export default App;
