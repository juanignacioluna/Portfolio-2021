
import React, { Component, useState, useEffect } from 'react';

import Typed from 'typed.js';

import { Link } from 'react-router-dom';

import img1 from './assets/img1.svg';
import img2 from './assets/img2.png';
import img3 from './assets/img3.svg';
import img4 from './assets/img4.svg';
import img5 from './assets/img5.svg';

import messi from './assets/messi.gif';

import Footer from '../Footer/Footer';

import './Aplicaciones.css';

import * as utils from './lista-apps';


function Aplicaciones(){


	useEffect(() =>{


	},[]);



	const cardsApps = utils.listaApps.map((app) =>{

		return (
	
			<div class="col-lg-4 col-md-6 col-sm-10 col-12">
	
				<div class="card text-white bg-success mb-3">
					<div class="card-header">

						<h6><span class="badge bg-light">{app.fecha}</span></h6>

			            {app.tecnologias.map((tecno) => {
							return (
								<h6><span class="badge bg-dark">{tecno}</span></h6>
							);
			            })}
	
					</div>
					<div class="card-body">
						<h5 class="card-title">{app.nombre}</h5>
						<img src={app.gif}></img>
						<h6><span class="badge bg-light">{app.descripcion}</span></h6>
						<a class="btn-deploy btn btn-dark btn-block" 
						href={app.deploy} target="_blank">Ver online</a>
						<a class="btn btn-dark btn-block" href={app.github} target="_blank">Ver github</a>
					</div>
				</div>
	
			</div>
	
	)});

	return (

		<div className="Aplicaciones">

			<div class="container-fluid">
				<div class="row justify-content-center">

					<div class="col-12">

						<br></br>

						<h1 class="display-4 titulo">Aplicaciones</h1>

						<br></br>

						<div class="container-fluid">
							<div class="row justify-content-center">

								{cardsApps}

							</div>

						</div>

					</div>

				</div>

			</div>

			<Footer />

		</div>


	);

}

export default Aplicaciones;
