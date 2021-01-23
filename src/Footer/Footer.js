
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer(){

	return (
		<div className="Footer">

			<button type="button" class="btn btn-primary linkedin">
			<i class="fab fa-linkedin"></i></button>

			<button type="button" class="btn btn-light github">
			<i class="fab fa-github-square"></i></button>

			<button type="button" class="btn btn-primary twitter">
			<i class="fab fa-twitter"></i></button>

			<button type="button" class="btn btn-success email">
			<i class="fas fa-envelope"></i></button>

			<br></br><br></br>


			<span>
				Made with <i class="fa fa-heart pulse"></i> by Luna
			</span>

		</div>
	);

}

export default Footer;
