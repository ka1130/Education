import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Chooser from './components/Chooser';
import Table from './components/Table';

function App(props) {
  return(
    <div>
      <Header title={props.title} subtitle={props.subtitle}/>
      <Chooser title="Choose Options" />
      <Table />
    </div>
  )
}

export default App;
