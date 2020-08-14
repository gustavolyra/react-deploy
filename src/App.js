import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
const axios = require('axios').default;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allJokers: [],
    };
  }

  //get with header
  //   async getDataAxios(){
  //     const response =
  //       await axios.get("https://dog.ceo/api/breeds/list/all",
  //         { headers: {'Content-Type': 'application/json'}}
  //       )
  //     console.log(response.data)
  // }

  // const response = await axios.post(
  //   'https://example.com',
  //   { example: 'data' },
  //   { headers: { 'Content-Type': 'application/json' } }
  // )
  // console.log(response.data)

  async componentDidMount() {
    const res = await axios.get('http://localhost:3001/ecosolys');
    const json = res.data;
    console.log(json);
    this.setState({
      allJokers: json,
    });
  }

  handleReset = (id) => {
    console.log('RESET');
    console.log(id);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Body users={this.state.allJokers} />
      </div>
    );
  }
}
