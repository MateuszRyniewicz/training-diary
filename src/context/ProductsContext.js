import { createContext, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
	const [users, setUsers] = useState([]);

	return (
		<ProductsContext.Provider value={{ users, setUsers }}>
			{children}
		</ProductsContext.Provider>
	);
};
