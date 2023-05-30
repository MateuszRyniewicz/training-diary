import { createContext, useState } from 'react';
import { users } from '../db/users';
// import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	// const navigate = useNavigate();

	const login = (formLoginValues) => {
		const user = users.find((user) => user.email === formLoginValues.email);
		if (!user) {
			return { success: false, message: 'nie znaleziono email' };
		}
		if (user && user.password !== formLoginValues.password) {
			return { success: false, message: 'niepoprawne hasło' };
		} else if (user && user.password === formLoginValues.password) {
			setCurrentUser(user);
			// navigate('/dashboard');
			return { success: true, message: 'zalogowano' };
		}
	};

	const logout = () => {
		setCurrentUser(null);
		// navigate('/');
	};

	return (
		<AuthContext.Provider value={{ login, logout, currentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
