import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allJokers: [],
    };
  }

  async componentDidMount() {
    console.log('Hi there');
    const res = await fetch('http://localhost:3001/ecosolys');
    const json = await res.json();
    console.log(json);
    this.setState({
      allJokers: json,
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Body users={this.state.allJokers} />
      </div>
    );
  }
}
