import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import * as api from './api/apiHandler';

export default function App() {
  const [allJokers, setAllJokers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const json = await api.getApi();
      setAllJokers(json);
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
      <Body users={allJokers} resetJoker={handleResetJoker} />
    </div>
  );
}
