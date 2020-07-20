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
    techs: [
      'Nodejs',
      'ReactJs',
      'React Native'
    ]
  };
  render() {
    return (
      <ul>
        {this.state.techs.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    );
  }
}
