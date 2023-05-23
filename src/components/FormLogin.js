import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const FormLogin = () => {
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
		console.log(values);
	};

	return (
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
					<form onSubmit={handleSubmit} noValidate>
						<div className='form-box-error-message'>
							<label>Email</label>
							{errors.email && touched.email && <p>{errors.email}</p>}
						</div>
						<input
							type='text'
							name='email'
							value={values.email}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<div className='form-box-error-message'>
							<label>Password</label>
							{errors.password && touched.password && <p>{errors.password}</p>}
						</div>
						<input
							type='text'
							name='password'
							value={values.password}
							onBlur={handleBlur}
							onChange={handleChange}
						/>

						<button>wyślij</button>
						<p>nie masz jeszcze konta?</p>
						<Link to='/register'>zarejerstuje sie</Link>
					</form>
				);
			}}
		</Formik>
	);
};

export default FormLogin;
