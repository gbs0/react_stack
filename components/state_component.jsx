// Stateful components is also a JS Object
// src/index.js
import React, { Component } from 'react';

class Hello extends Component { // Stateful component needs to
  constructor (props) {         // be promoted into a class
    super(props);
  }

  this.state = { clicked: false }; // Defines initial state
}