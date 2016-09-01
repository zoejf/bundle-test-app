import React from 'react';
import Navbar from './navbar';
import {Link} from 'react-router';

var Homepage = function () {
	return (
		<div>
			<div className="jumbotron">
			  <h1>Bundle It Home</h1>
			</div>
			<div className="how-it-works-section">
				<h3>How It Works</h3>
				<p>Fingerstache disrupt accusamus portland. Non ethical you probably havent heard of them, raw denim yuccie pariatur messenger bag sriracha PBR&B nulla quinoa. </p>
				<Link to="/questions">
					<button type="button" className="btn btn-warning">
						Get Started!
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Homepage;
