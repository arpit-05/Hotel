import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Menu from './components/Menu'
import {DISHES} from './shared/dishes'
import Main from './components/MainComponent'


class App extends Component {
  
render(){
  return (
    <Main/>
  );
}
}
export default App;
