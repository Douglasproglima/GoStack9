import React from 'react';

//validar as propriedades através do Proptypes - yarn add prop-type
import PropTypes from 'prop-types';
import './index.css'

function TechItem({tech, onDelete}) {
  return (
    <li>
      {tech}
      <button className="btnRemove" onClick={onDelete} type="button">X</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Nenhum Registro',
}

TechItem.protoTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;