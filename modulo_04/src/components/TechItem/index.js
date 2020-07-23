import React from 'react';
import './index.css'

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button className="btnRemove" onClick={onDelete} type="button">X</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Nenhum Registro'
}

export default TechItem;