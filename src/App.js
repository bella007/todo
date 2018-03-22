import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList'
import UserList from './components/UserList'
import fetchUsers from './fuction/fetchUsers'

class App extends Component {
    constructor(props) {
        super(props);
        this.fetchUsers = fetchUsers.bind(this);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header><br />
        {/*< TaskList />*/}
          <UserList fet={this.fetchUsers}/>
      </div>
    );
  }
}

export default App;
