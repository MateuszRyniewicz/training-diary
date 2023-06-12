import { createContext, useState } from 'react';

export const ConfirmDialogContext = createContext();

export const ConfirmDialogContextProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<ConfirmDialogContext.Provider value={{ isOpen, setIsOpen }}>
			{children}
		</ConfirmDialogContext.Provider>
	);
};
