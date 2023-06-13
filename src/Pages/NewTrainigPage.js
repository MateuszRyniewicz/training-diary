import React, { useContext, useState } from 'react';

import { TrainigContext } from '../context/TrainigContext';
import PopupMessage from '../components/PopupMessage';

import { PopupContext } from '../context/PopupContext';

import './NewTrainigPage.scss';

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

	const { addTrainig, trainigsList } = useContext(TrainigContext);
	const { message, setMessage, setIsOpenPopup, isOpenPopup } =
		useContext(PopupContext);

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

		setMessage('Dodano nowy trening');
		setIsOpenPopup(true);
	};
	// const deleteInput = (i) => {
	// 	const deleteInput = [...inputFields];
	// 	deleteInput.splice(i, 1);
	// 	setInputFields(deleteInput);
	// };

	return (
		<>
			{isOpenPopup && <PopupMessage />}
			{/* {trainigsList.map((trainig) => (
				<p>{trainig.title}</p>
			))} */}
			<main>
				<form onSubmit={submitForm} className='new-training-form'>
					<div className='new-trainig-form-box-left'>
						<div className='new-trainig-form-box-left-title-date'>
							<input
								className='input'
								type='text'
								placeholder='title'
								onChange={(e) => setTitle(e.target.value)}
							/>
							<input
								className='input'
								type='date'
								onChange={(e) => setTrainigDate(e.target.value)}
							/>
						</div>

						{inputFields.map((inputField, i) => (
							<div className='new-trainig-from-box-inputs-excercises' key={i}>
								<input
									className='input'
									type='text'
									name='exName'
									placeholder='exName'
									value={inputField.exName}
									onChange={(e) => changeInputHandle(i, e)}
								/>
								<input
									className='input'
									type='text'
									name='reps'
									placeholder='reps'
									value={inputField.reps}
									onChange={(e) => changeInputHandle(i, e)}
								/>
								<input
									className='input'
									type='text'
									name='weights'
									placeholder='weights'
									value={inputField.weights}
									onChange={(e) => changeInputHandle(i, e)}
								/>
							</div>
						))}

						<div className='new-trainig-button-box-submit'>
							<button className='new-training-button' type={'submit'}>
								zapisz trening
							</button>
						</div>
					</div>
					<div className='new-trainig-form-box-right'>
						<button className='new-training-button' onClick={addFieldHandle}>
							+
						</button>
					</div>
				</form>
			</main>
		</>
	);
};

export default NewTrainigPage;
