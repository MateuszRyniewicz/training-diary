import React, { useContext, useState } from 'react';

import './NewTrainigPage.scss';
import { TrainigContext } from '../context/TrainigContext';

const NewTrainigPage = () => {
	const [title, setTitle] = useState('');
	const [trainigDate, setTrainigDate] = useState('');

	const [inputFields, setInputFields] = useState([
		{
			exName: '',
			reps: '',
			weights: '',
		},
	]);

	const { addTrainig } = useContext(TrainigContext);

	const addFieldHandle = () => {
		setInputFields([...inputFields, { exName: '', reps: '', weights: '' }]);
	};

	const changeInputHandle = (i, e) => {
		const values = [...inputFields];
		values[i][e.target.name] = e.target.value;
		setInputFields(values);
	};

	const submitForm = (e) => {
		e.preventDefault();

		const resp = addTrainig({
			title: title,
			trainigDate: trainigDate,
			exercises: inputFields,
		});

		console.log(resp);
	};
	// const deleteInput = (i) => {
	// 	const deleteInput = [...inputFields];
	// 	deleteInput.splice(i, 1);
	// 	setInputFields(deleteInput);
	// };

	return (
		<main>
			<form onSubmit={submitForm} className='new-training-form'>
				<h3>Title </h3>
				<button className='new-training-button' onClick={addFieldHandle}>
					Add
				</button>
				<input type='text' onChange={(e) => setTitle(e.target.value)} />
				<input type='date' onChange={(e) => setTrainigDate(e.target.value)} />

				{inputFields.map((inputField, i) => (
					<div key={i}>
						<input
							type='text'
							name='exName'
							placeholder='exName'
							value={inputField.exName}
							onChange={(e) => changeInputHandle(i, e)}
						/>
						<input
							type='text'
							name='reps'
							placeholder='reps'
							value={inputField.reps}
							onChange={(e) => changeInputHandle(i, e)}
						/>
						<input
							type='text'
							name='weights'
							placeholder='weights'
							value={inputField.weights}
							onChange={(e) => changeInputHandle(i, e)}
						/>
					</div>
				))}
				<button type={'submit'}>zapisz trening</button>

				{/* {inputFields.map((newInput, i) => {
					return (
						<div className='new-training-box-input' key={i}>
							<input
								className='input'
								value={newInput}
								onChange={(e) => changeInputValue(e, i)}
							/>
							<button
								type='button'
								className='new-training-button-close'
								onClick={() => deleteInput(i)}>
								X
							</button>
						</div>
					);
				})} */}
			</form>
		</main>
	);
};

export default NewTrainigPage;
