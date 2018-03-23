import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/ToDo/TaskList'
import Hello from './components/Hello'
import UserList from './components/Users/UserList'
import EditUser from './components/Users/EditUser'
import {Link, Route, Switch} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <br/>

                <Switch>
                    <Route exact path='/' component={Hello}/>

                    <Route path='/TaskList' component={TaskList}/>
                    <Route exact path='/UserList' component={UserList}/>
                    <Route path={`/UserList/user/:id`} component={EditUser}/>
                    <Route path="*" component={() => <div>Page Not Found</div>}/>
                </Switch>
            </div>
        );
    }
}

export default App;
