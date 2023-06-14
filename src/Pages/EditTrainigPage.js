import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';

import { TrainigContext } from '../context/TrainigContext';

const EditTrainigPage = () => {
	const { id } = useParams();

	const { trainigsList } = useContext(TrainigContext);

	const trainigToEdit = trainigsList.find((trainig) => trainig.id === id);
	console.log(trainigToEdit);

	const [inputTitle, setInputTitle] = useState(trainigToEdit.title);
	const [inputDate, setInputDate] = useState(
		`${new Date(trainigToEdit.date).toISOString().slice(0, 10)}`
	);

	const [excercises, setExcercises] = useState(trainigToEdit.excercises);

	const changeInputsHandle = (e, i) => {
		const values = [...excercises];
		values[i][e.target.name] = e.target.value;
		setExcercises(values);
	};

	const submitForm = (e) => {
		e.submitDefault();
	};

	return (
		<form onSubmit={{ submitForm }}>
			<div>
				<p>{trainigToEdit.title}</p>
				<p>{trainigToEdit.date}</p>
			</div>
			<div>
				<input
					value={inputTitle}
					type='text'
					onChange={(e) => setInputTitle(e.target.value)}
				/>
				<input
					value={inputDate}
					type='date'
					onChange={(e) => setInputDate(e.target.value)}
				/>
			</div>
			{excercises.map((excercise, i) => (
				<div key={i}>
					<input
						name='exName'
						value={excercise.exName}
						type='text'
						onChange={(e) => changeInputsHandle(e, i)}
					/>
					<input name='reps' value={excercise.reps} type='text' />
					<input name='weights' value={excercise.weights} type='text' />
				</div>
			))}
			<button type='submit'>Edit</button>
		</form>
	);
};

export default EditTrainigPage;
