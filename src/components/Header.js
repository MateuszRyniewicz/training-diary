import React from 'react';

import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<nav className='nav'>
				<ul className='menu'>
					<li>
						<Link className='menu-link' to='/'>
							Home
						</Link>
					</li>
					<li className='menu-link'>
						<Link to='/login'>Login</Link>
					</li>
					<li className='menu-link'>
						<Link to='/register'>Register</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
