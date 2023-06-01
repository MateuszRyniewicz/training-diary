import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	const { currentUser, logout } = useContext(AuthContext);

	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!currentUser) {
	// 		navigate('/');
	// 	}
	// }, [currentUser]);

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
			{currentUser && <p>{currentUser.name}</p>}
			{currentUser && <button onClick={logout}>logout</button>}
		</header>
	);
};

export default Header;
