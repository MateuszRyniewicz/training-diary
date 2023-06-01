import React, { Children } from 'react';
import { useState } from 'react';

const NewTrainigPage = () => {
	const [inputFields, setInputFields] = useState([]);

	const addInputFields = () => {
		setInputFields([...inputFields, []]);
	};

	const changeInputValue = (e, i) => {
		const inputData = [...inputFields];
		inputData[i] = e.target.value;
		setInputFields(inputData);
		// setInputFields([...(inputFields[i] = e.target.value)]);
	};

	const deleteInput = (i) => {
		const deleteInput = [...inputFields];
		deleteInput.splice(i, 1);
		setInputFields(deleteInput);
	};

	console.log(inputFields);

	return (
		<>
			<button onClick={() => setInputFields([...inputFields, []])}>Add</button>
			{inputFields.map((newInput, i) => {
				return (
					<div>
						<input value={newInput} onChange={(e) => changeInputValue(e, i)} />
						<button onClick={() => deleteInput(i)}>X</button>
					</div>
				);
			})}
		</>
	);
};

export default NewTrainigPage;
