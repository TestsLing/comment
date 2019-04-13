import React, { Component } from 'react';
import './App.css';
import Comment from './evaluate/index';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="App">
              <Comment />
          </div>
        );
  }
}

export default App;
