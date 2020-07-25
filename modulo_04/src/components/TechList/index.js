import React, { Component } from 'react';
import TechItem from '../TechItem';
import './index.css';

/* Criar components com functions 
export default function Button() {
  return <button>Hello World</button>
} 
*/

// Criar components com class
export default class TechList extends Component {
  
  //propriedades estaticas de class
/*   static defaultProps = {
    tech: 'Nenhum registro'
  }; */

  state = {
    newTech: '',
    techs: []
  };

//*********************CICLO DE VIDA DE DO COMPONETE*********************//
// Executa assim que o componente aparece na tela
  componentDidMount() {
    const techs = localStorage.getItem('Techs');
    if(techs)
      this.setState({techs: JSON.parse(techs)});  
  }

// Executar sempre que houver alterações nas props ou estado
  componentDidUpdate(prevProps, prevState) {
    // this.prorps ou this.state
    if(prevState.techs !== this.state.techs)
      localStorage.setItem('Techs', JSON.stringify(this.state.techs));
  }

//  Executa quando o componente deixa de existir
  componentWillMount() {}

  handleInputChange = e => {
    this.setState({ newTech: e.target.value});
  }

  handgleSumit = e => {
    e.preventDefault();

    this.setState({ 
      techs: [...this.state.techs, this.state.newTech], 
      newTech: ''
    });
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  }

  render() {
    return (
        <form className='main' onSubmit={this.handgleSumit}>
          <h2>Softskills</h2>
          <hr></hr>
          <input 
              type="text" 
              placeholder="Informe a Nova Skill" 
              onChange={this.handleInputChange} 
              value={this.state.newTech} 
            />
          <button type="submit">OK</button>
          <hr></hr>
          
          <ul className="tasks">
            {this.state.techs.map((tech) => (
              <TechItem 
                propriedade={ {user: {name: 'douglas', lastName: 'lima'}} } 
                key={tech} 
                tech={tech} 
                onDelete={() => this.handleDelete(tech)} 
              />
            ))}
            <TechItem></TechItem>
          </ul>
        </form>
    );
  }
}
