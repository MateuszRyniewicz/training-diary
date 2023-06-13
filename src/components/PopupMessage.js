import React, { useContext } from 'react';
import { PopupContext } from '../context/PopupContext';

import './PopupMessage.scss';

const PopupMessage = () => {
	const { message, setIsOpenPopup } = useContext(PopupContext);

	return (
		<div className='popup-message'>
			<h3>{message}</h3>
			<button className='popup-message-button' onClick={() => setIsOpenPopup(false)}>OK</button>
		</div>
	);
};

export default PopupMessage;
