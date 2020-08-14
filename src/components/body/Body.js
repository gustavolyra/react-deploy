import React, { Component } from 'react';
import Description from './information/Description';

export default class Body extends Component {
  render() {
    const name = 'Teste';
    const record = 100;
    const lastJoke = 20;
    return (
      <div>
        <div className="row">
          {this.props.users}
          <div className="col xl3 l4 m6 s12">
            <Description
              name={name}
              record={record}
              lastJoke={lastJoke}
              onClick={this.handleClick}
            />
          </div>
          <div className="col xl3 l4 m6 s12">
            <Description
              name={name}
              record={record}
              lastJoke={lastJoke}
              onClick={this.handleClick}
            />
          </div>
          <div className="col xl3 l4 m6 s12">
            <Description
              name={name}
              record={record}
              lastJoke={lastJoke}
              onClick={this.handleClick}
            />
          </div>
          <div className="col xl3 l4 m6 s12">
            <Description
              name={name}
              record={record}
              lastJoke={lastJoke}
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
