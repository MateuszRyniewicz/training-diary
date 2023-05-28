import React, { useContext, useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

import { Formik } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';

import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import './FormLogin.scss';

const FormLogin = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const { users, setUsers } = useContext(ProductsContext);
	console.log(users);
	const navigate = useNavigate();

	const validationSchema = () =>
		Yup.object().shape({
			email: Yup.string()
				.required('Musisz podać email')
				.email('Podaj prawidłowy email'),
			password: Yup.string()
				.required('musisz podać hasło')
				.min(4, 'musisz podać 4 znaki')
				.max(20, 'musi mieć 20 znków'),
		});

	const initialValues = { email: '', password: '' };

	const submitForm = (values) => {
		const user = users.find((user) => user.email === values.email);
		if (user && user.password !== values.password) {
			console.log('nie');
		} else if (user && user.password === values.password) {
			setIsLoading(true);
			console.log('tak');
			navigate('/dashboard');
		}
	};

	useEffect(() => {
		const getApi = async () => {
			try {
				setIsLoading(true);
				const response = await axios.get('http://localhost:3100/users');
				setUsers(response.data);
				setIsLoading(false);
			} catch (error) {
				setError(error);
			}
		};

		getApi();
	}, []);

	return (
		<main>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={submitForm}>
				{(formik) => {
					const {
						values,
						errors,
						touched,
						handleChange,
						handleSubmit,
						handleBlur,
					} = formik;
					return (
						<form className='form' onSubmit={handleSubmit} noValidate>
							<div className='box-background' />
							<h3 className='form-header-text'>user login</h3>
							<div className='form-box-error-message'>
								{errors.email && touched.email && (
									<p className='form-error-message'>{errors.email}</p>
								)}
							</div>
							<div className='form-box-input'>
								<div className='form-box-input-icon'>
									<AiOutlineUser className='form-input-icon' />
								</div>
								<input
									className='input'
									type='text'
									name='email'
									placeholder='your email'
									value={values.email}
									onBlur={handleBlur}
									onChange={handleChange}
								/>
							</div>
							<div className='form-box-error-message'>
								{errors.password && touched.password && (
									<p className='form-error-message'>{errors.password}</p>
								)}
							</div>
							<div className='form-box-input'>
								<div className='form-box-input-icon'>
									<RiLockPasswordFill className='form-input-icon' />
								</div>
								<input
									className='input'
									type='text'
									name='password'
									placeholder='your password'
									value={values.password}
									onBlur={handleBlur}
									onChange={handleChange}
								/>
							</div>
							<div className='form-box-buttons'>
								<button type='submit' className='form-button'>
									send
								</button>
								<p className='form-text'>Don't you have an account?</p>
								<Link to='/register' className='form-button-login'>
									register now
								</Link>
							</div>
						</form>
					);
				}}
			</Formik>
		</main>
	);
};

export default FormLogin;
