import React, { Component } from 'react';
import css from './info.module.css';

export default class Description extends Component {
  render() {
    return (
      <div className={css.description}>
        <h4>Nome</h4>
        <img
          src="https://avatars3.githubusercontent.com/u/32414544?s=460&u=d5d92eb269676f9fa4fe4d9aa247662a6faa5b92&v=4"
          alt="nome"
        />
        <span>Estamos há 162 dias sem piadas ruim.</span>
        <span>Nosso recorde é de 162 dias.</span>
        <button>Zerar Contagem</button>
      </div>
    );
  }
}
