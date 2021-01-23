import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(){

    return (
      <div className="NavBar">


        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

          <div class="container-fluid">

          <Link to="/home">
            <span class="navbar-brand">Juan Ignacio Luna</span>
          </Link>
            

            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                  <Link to="/home">
                    <span class="nav-link active">Inicio</span>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/apps">
                    <span class="nav-link active">Aplicaciones</span>
                  </Link>
                </li>

              </ul>

            </div>
          </div>
        </nav>


      </div>
    );

}

export default NavBar;
