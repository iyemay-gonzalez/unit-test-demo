import {ChangeEvent} from "react";

export interface LoginFormValues {
	userName?: string;
	userPassword?: string;
}

export interface LoginFormComponent {
	formValues: LoginFormValues;
	handleSubmit: (
		event: ChangeEvent<HTMLButtonElement>,
	) => void;
	handleChange: (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => void;
}