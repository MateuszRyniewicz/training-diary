import React from 'react';

import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<main>
			<Link to={'/trainigs/new'}>
				<button>dodaj trening</button>
			</Link>
			<button>zobacz listę treningów</button>
		</main>
	);
};

export default Dashboard;
