import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { TrainigContext } from '../context/TrainigContext';

import PopupMessage from '../components/PopupMessage';
import { PopupContext } from '../context/PopupContext';

import './EditTrainigPage.scss';

const EditTrainigPage = () => {

	const { id } = useParams();

	const { trainigsList, editTrainig } = useContext(TrainigContext);
	const { isOpenPopup, setIsOpenPopup, setMessage } = useContext(PopupContext);

	const trainigToEdit = trainigsList.find((trainig) => trainig.id === id);

	const [inputTitle, setInputTitle] = useState(trainigToEdit.title);
	const [inputDate, setInputDate] = useState(
		`${new Date(trainigToEdit.trainigDate).toISOString().slice(0, 10)}`
	);

	const [excercises, setExcercises] = useState(trainigToEdit.excercises);

	const changeInputsHandle = (e, i) => {
		const values = [...excercises];
		values[i][e.target.name] = e.target.value;
		setExcercises(values);
	};

	const submitForm = (e) => {
		e.preventDefault();

		editTrainig({
			id,
			title: inputTitle,
			trainigDate: inputDate,
			excercises,
		});

		setMessage('Training has been edited');
		setIsOpenPopup(true);
	};

	return (
		
		<main>
			{isOpenPopup && <PopupMessage />}
			<form className='edit-trainig-page' onSubmit={submitForm}>
				<div className='edit-trainig-page-header'>
					<p>{trainigToEdit.title}:</p>
					<p>{trainigToEdit.trainigDate}</p>
				</div>
				<div className='edit-trainig-page-box-inputs'>
					<input
						className='edit-trainig-page-input'
						value={inputTitle}
						type='text'
						onChange={(e) => setInputTitle(e.target.value)}
					/>
					<input
						className='edit-trainig-page-input'
						value={inputDate}
						type='date'
						onChange={(e) => setInputDate(e.target.value)}
					/>
				</div>
				{excercises.map((excercise, i) => (
					<div className='edit-trainig-page-box-inputs' key={i}>
						<input
							className='edit-trainig-page-input'
							name='exName'
							value={excercise.exName}
							type='text'
							onChange={(e) => changeInputsHandle(e, i)}
						/>
						<input
							className='edit-trainig-page-input'
							name='reps'
							value={excercise.reps}
							type='text'
							onChange={(e) => changeInputsHandle(e, i)}
						/>
						<input
							className='edit-trainig-page-input'
							name='weights'
							value={excercise.weights}
							type='text'
							onChange={(e) => changeInputsHandle(e, i)}
						/>
					</div>
				))}
				<div className='edit-trainig-page-box-button'>
					<button className='edit-trainig-page-button-submit' type='submit'>
						Edit
					</button>
				</div>
			</form>
		</main>
	);
};

export default EditTrainigPage;
