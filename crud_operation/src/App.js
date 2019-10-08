import React from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar';
import { Router , Route, Switch   } from 'react-router'
import EditDeleteList from './EditDeleteList'
import  createBrowserHistory from 'history/createBrowserHistory';
const   customHistory = createBrowserHistory();
// import createBrowserHistory from 'history/createBrowserHistory';


// const history = createBrowserHistory();
console.log(this)

 const App = (props) => {
   console.log(props)
  return (
   

      <Router  history ={customHistory} >
        <div>
        <Switch>
        <Route path="/" component={Avatar} {...props} />
        <Route path="/avatar/:id"  component={EditDeleteList} />
      </Switch>

        </div>
      
      </Router>

  );
}

export default App;
