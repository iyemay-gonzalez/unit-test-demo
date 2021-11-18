import React, { ChangeEvent, useState } from "react";
import LoginFormComponent from "./loginForm.component";
import { LoginFormValues } from "./loginForm.types";
import LoginRequest from "../../request/loginRequest";

const LoginForm: React.FC = () => {
	const [state, setState] = useState<LoginFormValues>({
		userName: '',
		userPassword: '',
	});
	
	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		const { target } = event;
		const name = target.name;
		const value = target.value;
		setState(prevState => ({
			...prevState,
			[name]: value
		}));
	};
	
	const handleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
		event.preventDefault();
		LoginRequest(state.userName, state.userPassword);
	};
	
	return (
		<LoginFormComponent
			formValues={state}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
		/>
	);
};

export default LoginForm;