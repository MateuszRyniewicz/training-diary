import React, { useContext, useEffect, useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsPersonPlus } from 'react-icons/bs';

import axios from 'axios';

const FormRegister = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const { register, setUsersList, login, setCurrentUser } =
		useContext(AuthContext);

	const validationSchema = () =>
		Yup.object().shape({
			email: Yup.string()
				.required('Musisz podać email')
				.email('Podaj prawidłowy email'),
			password: Yup.string()
				.required('musisz podać hasło')
				.min(4, 'musisz podać 4 znaki')
				.max(20, 'musi mieć 20 znków'),
			name: Yup.string()
				.required('musisz podać imię')
				.min(4, 'musisz podać 4 znaki')
				.max(12, 'musi mieć 12 znaków'),
		});

	const initialValues = { email: '', password: '', name: '' };

	const submitForm = (values) => {
		const response = register(values);
		if (response.success) {
			setCurrentUser(values);
			navigate('/dashboard');
		}
	};

	return (
		<main>
			{isLoading ? (
				<div className='container-loader'>
					<div className='loader' />
				</div>
			) : (
				<>
					{error ? (
						<h2>error:{error.response.status}</h2>
					) : (
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
										<h3 className='form-header-text'>register</h3>
										<div className='form-box-error-message'>
											{errors.email && touched.email && (
												<p className='form-error-message'>{errors.email}</p>
											)}
										</div>
										<div className='form-box-input'>
											<div className='form-box-input-icon'>
												<AiOutlineMail className='form-input-icon' />
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
										<div className='form-box-error-message'>
											{errors.name && touched.name && (
												<p className='form-error-message'>{errors.name}</p>
											)}
										</div>
										<div className='form-box-input'>
											<div className='form-box-input-icon'>
												<BsPersonPlus className='form-input-icon' />
											</div>
											<input
												className='input'
												type='text'
												name='name'
												placeholder='your name'
												value={values.name}
												onBlur={handleBlur}
												onChange={handleChange}
											/>
										</div>
										<div className='form-box-buttons'>
											<button type='submit' className='form-button'>
												send
											</button>
											<p className='form-text'>Do you have an account?</p>
											<Link className='form-button-login' to='/login'>
												sign up
											</Link>
										</div>
									</form>
								);
							}}
						</Formik>
					)}
				</>
			)}
		</main>
	);
};

export default FormRegister;
