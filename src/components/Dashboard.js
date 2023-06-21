import React from 'react';

import { Link } from 'react-router-dom';

import './Dashboard.scss';


const Dashboard = () => {
	
	return (
		<main>
			<div className='dashboard-box-buttons'>
				<Link to={'/trainigs/new'}>
					<button className='dashboard-button'>dodaj trening</button>
				</Link>
				<Link to={'/trainigs'}>
					<button className='dashboard-button'>zobacz listę treningów</button>
				</Link>
			</div>
		</main>
	);
};

export default Dashboard;
