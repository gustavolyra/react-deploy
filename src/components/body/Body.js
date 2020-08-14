import React from 'react';
import Description from './information/Description';

export default function Body({ users }) {
  const handleClick = (event, id) => {
    console.log(id);
  };

  return (
    <div className="row">
      {users.map((user) => {
        const { id, name, lastJoke, record, avatar } = user;
        return (
          <div className="col xl3 l4 m6 s12">
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
