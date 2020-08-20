import React, {useState, useEffect, useMemo, useCallback} from 'react';
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

  /* state em formato de Function */
  const [tech, setTech] = useState([]);

  const [newTech, setNewTech] = useState('');

  /* Sem o hooks useCallback */
  /*
  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }
  */

  //COM O useCallback
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  /*
  componentDidMount ->
  Para que um hook execute apenas uma vez, basta passar no 2 param um array vazio
   */
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');
    if(tech) setTech(JSON.parse(storageTech));

    /* componentWillMount ->
        Basta retornar uma função dentro do useEffect.
        a function abaixo será executada toda vez que o componente deixar de existir
    */
    return () => {
      // document.removeEventListernter();
    };

  }, []);

  /* componentDidUpdate ->
      Da outra forma compara os valores anteriores são iguais aos atuais e depois
      da um setState e depois dentro do history do navegador
  */

  //1 Param: É a função que será executada
  //2 Param: Quando ela será executada.
  //         O 2 param é um array de dependências que fica monitorando alterações em determinadas
  //         variáveis.
  // Ou seja o hook abaixo será executado toda vez que houver alteração no array tech
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));

    return () => {
      // document.removeEventListernter();
    };
  }, [tech]);

  //useMemo(function() => que retorna o valor, [dependencias] );
  const techSize =  useMemo(() => tech.length, [tech]);

  return (
    <>
      <input type="text"
        value={newTech}
        onKeyPress={e => setNewTech(e.target.value)}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>ADD</button>
      <ul>
        {tech.map(t => (<li key={t}>{t}</li>))}
      </ul>

      {/*
        Da forma abaixo é chamado toda vez que o return é executado, ou seja,
        digitar uma letra no input executa o return novamente
      */}
      {/* <strong>Qtde. de Skills: {techSize}</strong> */}

      {/* Da forma abaixo executa apenas quando sofrer alteração na no array */}
      <strong>Qtde. de Skills: {techSize}</strong>
    </>
  );
}

export default App;
