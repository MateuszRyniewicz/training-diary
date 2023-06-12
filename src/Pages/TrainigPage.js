import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TrainigContext } from '../context/TrainigContext';

const TrainigPage = () => {
	const { id } = useParams();

	const { trainigsList } = useContext(TrainigContext);
	console.log(trainigsList);
	const singleTrainig = trainigsList.find((trainig) => trainig.id === id);

	return (
		<div>
			<p>{singleTrainig.title}</p>
			<p>{singleTrainig.date}</p>
			<ul>
				{singleTrainig.excercises.map((excercise, i) => (
					<li key={i}>
						{excercise.exName} - {excercise.reps} - {excercise.weights} kg
					</li>
				))}
			</ul>
		</div>
	);
};

export default TrainigPage;
