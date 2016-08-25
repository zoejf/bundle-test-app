import React from 'react';
import Navbar from './navbar';
var AppView = function (props) {
	return (
		<div>
			<Navbar />
			{props.children}
		</div>
	)
}

export default AppView;