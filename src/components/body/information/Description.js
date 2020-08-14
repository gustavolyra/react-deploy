import React from 'react';
import css from './info.module.css';

export default function Description(props) {
  const { id, name, lastJoke, record, avatar } = props;
  const handleClick = (event) => {
    props.onReset(event, id);
  };
  return (
    <div className={css.description}>
      <h4>{name}</h4>
      <img src={avatar} alt="nome" />
      <p>
        Estamos há {lastJoke} dias sem piadas ruim. Nosso recorde é de{''}
        {record} dias.
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
