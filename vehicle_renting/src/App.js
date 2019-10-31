import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home.js';
import Create from './components/Create.js';
import Delete from './components/Delete.js';
import Display from './components/Display.js';
import Edit from './components/Edit.js';
import Search from './components/Search.js';
import style from "./components/App.css";
import axios from "axios";



export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {

      }
  
    }
    
    

  render() {
    console.log(this.props.name);
    return (
      <React.Fragment>
        <div className="jumbotron bg">
          <h1 className="display-5 text-white text-center">TECHNOLOGY THAT DRIVES YOUR RENTAL SERVICES FORWARD</h1>
          <hr className="my-4"></hr>
          <div className="container bg-dark mt-5">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr- auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Item List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Add_Vehicle</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/display'} className="nav-link">History</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/search'} className="nav-link">Search_Vehicle</Link>
                </li>
              </ul>
            </div>
          </nav> 
          
          
              <Route path = "/" exact component = {Home} />
              <Route path = {`/create`}  component = {Create} />
              <Route path = "/display"  component = {Display} />
              <Route path = "/search"  component = {Search} />
              <Route path = {`/edit:id`}  component = {Edit} />
             
          
        </div>
        </div>
        
      </React.Fragment>
    );
  }
}


