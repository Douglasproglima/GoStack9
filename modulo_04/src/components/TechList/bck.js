import React, { Component } from 'react';
import './index.css';

/* Criar components com functions 
export default function Button() {
  return <button>Hello World</button>
} 
*/

// Criar components com class
export default class TechList extends Component {
  //Todo component escrito no formato class precisa ter um método render()
  
  state = {
    newTech: '',
    techs: [
      'Nodejs',
      'ReactJs',
      'React Native'
    ]
  };

  handgleInputChange = e => {
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

  handleDelete = (tech1) => {
    //console.log(tech1);
    this.setState({ techs: this.state.techs.filter(t => t !== tech1) });
  }

  render() {
    return (
      <div className="main">
        <h2>Softskills 2020</h2>
        <hr></hr>
        <form onSubmit={this.handgleSumit}>
          <input 
              type="text" 
              placeholder="Informe a Nova Skill" 
              onChange={this.handgleInputChange} 
              value={this.state.newTech} 
            />
          <button type="submit">OK</button>
          <hr></hr>
          <ul className="tasks">
            {this.state.techs.map((tech, index) => (
              <li key={index}>
                {tech}
                <button className="btnRemove" onClick={this.handleDelete(tech)} type="button">X</button>
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}
