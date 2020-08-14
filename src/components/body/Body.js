import React from 'react';
import Description from './information/Description';
const axios = require('axios').default;

export default function Body({ users, handleReset }) {
  const handleClick = async (event, id) => {
    console.log(id);
    const response = await axios.post(
      'http://localhost:3001/ecosolys/resetJoker/' + id,
      {
        firstName: 'Fred',
        lastName: 'Flintstone',
      }
    );
    console.log(response);
    //handleReset(id);
  };

  return (
    <div className="row">
      {users.map((user) => {
        const { id, name, lastJoke, record, avatar } = user;
        return (
          <div key={id} className="col xl3 l4 m6 s12">
            <Description
              id={id}
              name={name}
              record={record}
              lastJoke={lastJoke}
              avatar={avatar}
              onReset={handleClick}
            />
          </div>
        );
      })}
    </div>
  );
}
