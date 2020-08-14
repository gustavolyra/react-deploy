import React from 'react';
import Description from './information/Description';

export default function Body(props) {
  const handleClick = (event, id) => {
    console.log(id);
    console.log(event);
  };

  const name = 'Teste';
  const record = 100;
  const lastJoke = 20;
  return (
    <div>
      <div className="row">
        <div className="col xl3 l4 m6 s12">
          <Description
            id={0}
            name={name}
            record={record}
            lastJoke={lastJoke}
            onReset={handleClick}
          />
        </div>
        <div className="col xl3 l4 m6 s12">
          <Description
            id={1}
            name={name}
            record={record}
            lastJoke={lastJoke}
            onReset={handleClick}
          />
        </div>
        <div className="col xl3 l4 m6 s12">
          <Description
            id={2}
            name={name}
            record={record}
            lastJoke={lastJoke}
            onReset={handleClick}
          />
        </div>
        <div className="col xl3 l4 m6 s12">
          <Description
            id={3}
            name={name}
            record={record}
            lastJoke={lastJoke}
            onReset={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
