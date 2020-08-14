import React from 'react';
import css from './info.module.css';

export default function Description(props) {
  const handleClick = (event) => {
    props.onReset(event, props.id);
  };
  return (
    <div className={css.description}>
      <h4>{props.name}</h4>
      <img
        src="https://avatars3.githubusercontent.com/u/32414544?s=460&u=d5d92eb269676f9fa4fe4d9aa247662a6faa5b92&v=4"
        alt="nome"
      />
      <p>
        Estamos há {props.lastJoke} dias sem piadas ruim. Nosso recorde é de{' '}
        {props.record} dias.
      </p>
      <button
        className="waves-effect waves-light btn-large"
        onClick={handleClick}
      >
        Zerar Contagem
      </button>
    </div>
  );
}
