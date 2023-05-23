import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';

import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Outlet,
} from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/login',
		element: <Login />,
	},
]);

const App = () => {
	return (
		<div className='app'>
			<div className='container'>
				<RouterProvider router={router} />
			</div>
		</div>
	);
};

export default App;
