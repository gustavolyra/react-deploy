import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import * as api from './api/apiHandler';
import Spinner from './components/Spinner';

export default function App() {
  const [allJokers, setAllJokers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const json = await api.getApi();
      setTimeout(() => {
        setAllJokers(json);
      }, 2000);
    };

    getData();
  }, []);

  const handleResetJoker = (id) => {
    console.log(id);
    console.log('RESET');
    api.updateApi(id);
  };

  return (
    <div className="container">
      <Header />
      {allJokers.length === 0 && <Spinner />}
      {allJokers.length > 0 && (
        <Body users={allJokers} resetJoker={handleResetJoker} />
      )}
    </div>
  );
}
