import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Aplicaciones from './Aplicaciones/Aplicaciones';

import './App.css';


function App() {

  return (

      <BrowserRouter>

        <div>

          <NavBar />

          <Redirect
            from="/"
            to="/home" />

          <Switch>

            <Route
              path="/home"
              component={Home} />

            <Route
              path="/apps"
              component={Aplicaciones} />

          </Switch>

        </div>

      </BrowserRouter>


  );
}

export default App;
