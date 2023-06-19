import React from 'react';

import Header from './components/Header';

import Footer from './components/Footer';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

import './Global.scss';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import NewTrainigPage from './Pages/NewTrainigPage';
import TrainigsListPage from './Pages/TrainigsListPage';
import TrainigPage from './Pages/TrainigPage';
import EditTrainigPage from './Pages/EditTrainigPage';

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
				element: <HomePage />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
			},

			{
				path: '/trainigs/new',
				element: <NewTrainigPage />,
			},

			{
				path: '/trainigs',
				element: <TrainigsListPage />,
			},
			{
				path: '/trainigs/:id',
				element: <TrainigPage />,
			},
			{
				path: 'trainigs/:id/edit',
				element: <EditTrainigPage />,
			},
		],
	},

	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/login',
		element: <LoginPage />,
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
