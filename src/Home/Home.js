
import React, { Component, useState, useEffect } from 'react';

import Typed from 'typed.js';

import { Link } from 'react-router-dom';

import img1 from './img1.svg';
import img2 from './img2.png';
import img3 from './img3.svg';
import img4 from './img4.svg';
import img5 from './img5.svg';

import Footer from '../Footer/Footer';

import './Home.css';


function Home(){


	let tecnologias = ["Javascript","HTML","CSS","PHP","Python","C++","Sass", "Less", "SQL", "Node","Express",
	"Symfony","Vue","Laravel","React","Electron","Bootstrap","Angular","Django","React native",
	"JQuery","MongoDB","MySql","JSON","ThreeJS","Git","Flexbox","Css grid","Firebase",
	"Github pages","Heroku","MongoDB Atlas","BulmaCSS","AJAX","MDBootstrap","Jsx","Expo",
	"Visual Studio","XAMPP","Sublime","MySql Workbench","Robo 3T","SPA","Vue cli",
	"Emmet","Hooks React","Doctrine","Tracery JSON","P5JS","VexJS","Twitter Api",
	"Tweepy","TraceryJSON","Typed.js","Cleave.js","Interact.js","Atrament.js","Math js",
	"Animista css","Randomuser api","Deezer API","Particle.js","Football API","React-router",
	"Chess API","Open weather api", "Leaflet JS","GeoJSON","API Covid 19",
	"The cat api","Jexcel","ButterCake","Hover.css","PaperCSS","Chart.xkcd",
	"Wired elements","Tingle.js","Face-api.js","Milligram","Font awesome",
	"Fonts google","Picnic","Countup.js","Two.js","Granim","AOS","Elevator","Iconate"]

	const listaTecnologias = tecnologias.map((tecno) =>

		<div class="col-lg-3 col-md-4 col-6">
			<h4><span class="badge rounded-pill bg-dark">{tecno}</span></h4>
		</div>

	);



	useEffect(() =>{

		let typed = new Typed('.consola-texto', {

			strings: ["Soy un desarrollador fullstack buscando trabajo en Buenos Aires. Estudio Ingeniería en Sistemas en la Universidad Tecnológica Nacional. Programo desde los 11 y a los 20 me propuse convertirlo en mi trabajo. Actualmente estoy disponible para trabajo freelance. Creo poder hacer una diferencia en tu equipo.  Te invito a que veas mis aplicaciones :)"],
			typeSpeed: 30

		});

		let typed2 = new Typed('.consola-texto2', {
			strings: ['function Juan(){	<br></br>this.apodo = "Luna"<br></br>	this.pronombres = ["He", "Him"]<br></br>		this.carrera = "Ingeniería en Sistemas"<br></br>	this.cursos = function(){<br></br>		return [{"nombre": "Professional Full-Stack Developer","institucion": "UTN","fecha":"2020"}, {"nombre": "Experto Universitario en PHP y MySQL","institucion": "UTN","fecha":"2019"}, {"nombre": "Python3: analisis y visualizacion de datos","institucion": "Udemy","fecha":"2021"}, {"nombre": "PHP y MySQL Avanzado","institucion": "UTN","fecha":"2019"}, {"nombre": "React Native","institucion": "UES UTN","fecha":"2020"}, {"nombre": "Desarrollo avanzado en Javascript, JQuery y JSON","institucion": "UTN","fecha":"2019"}, {"nombre": "Desarrollo con Angular","institucion": "UTN","fecha":"2020"}, {"nombre": "Desarrollo con NodeJS","institucion": "UTN","fecha":"2020"}]<br></br>	}<br></br>		this.lenguajes = function(){<br></br>		return ["Javascript","HTML","CSS","PHP","Python","C++","SQL", "Less", "Sass"]<br></br>	}<br></br>		this.hobbies = function(){<br></br>		return ["escuchar podcasts","jugar al chess","ver pelis y series","tomar cafe"]	<br></br>}<br></br>}'],
			typeSpeed: 25
		});


	},[]);

	return (

		<div className="Home">

			<div class="container-fluid">
				<div class="row justify-content-center">

					<div class="col-lg-8 col-md-10">

						<br></br>

						<h1 class="display-4 titulo">Front-end, Back-end & Fullstack Developer</h1>

						<br></br>

						<img class="imgPrincipal" src={img5}></img>

						<br></br>

						<div id="consola">
							<div class="consola-seccion">
								C:\> <span class="consola-texto"></span>
							</div>
						</div>

						<br></br>

						<div class="container-fluid">
							<div class="row justify-content-center">

								<div class="col-8">
									<Link to="/apps">
										<button type="button" class="btn-lg btn btn-success btn-block">Ver aplicaciones</button>
									</Link>
								</div>

							</div>


						</div>

						<br></br>

						<br></br>

						<div class="container-fluid">
							<div class="row justify-content-center">

								<div class="col-6 col-lg-4">

									<img src={img4}></img>

								</div>

								<div class="col-6 col-lg-4">

									<img src={img3}></img>

								</div>

							</div>


						</div>

						<br></br>

						<div class="p-5 text-center bg-success tecnologias">

								<h1 class="mb-3">Tecnologías</h1>

								<br></br>

								<div class="container">
									<div class="row">

										{listaTecnologias}

									</div>
								</div>

								<br></br>


							</div>

							<br></br>

							<div id="consola" class="consola2">
								<div class="consola-seccion">
									C:\> <span class="consola-texto2"></span>
								</div>
							</div>

					</div>

				</div>

			</div>

			<Footer />

		</div>


	);

}

export default Home;
