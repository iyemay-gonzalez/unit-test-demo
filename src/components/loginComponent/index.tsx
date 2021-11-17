import React, { ChangeEvent, useState } from "react";
import LoginFormComponent from "./loginForm.component";
import { LoginFormValues } from "./loginForm.types";

const LoginForm: React.FC = () => {
	const [state, setState] = useState<LoginFormValues>({
		userName: '',
		userPassword: '',
	});
	
	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
		const { target } = event;
		const name = target.name;
		const value = target.value;
		setState({
			[name]: value
		})
	};
	
	const handleSubmit = (event: ChangeEvent<HTMLButtonElement>): void => {
		console.log("I am in handleSubmit step");
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