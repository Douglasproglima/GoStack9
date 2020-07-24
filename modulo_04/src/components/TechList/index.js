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
    /* techs: [] */
    techs: [
      'Nodejs',
      'ReactJs',
      'React Native'
    ]
  };

  handleInputChange = e => {
    console.log(e.target.value);
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
          <h2>Softskills 2020</h2>
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
