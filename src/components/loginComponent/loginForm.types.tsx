import {ChangeEvent} from "react";

export interface LoginFormValues {
	[key: string]: string | boolean | undefined;
	userName?: string;
	userPassword?: string;
}

export interface LoginFormComponent {
	formValues: LoginFormValues;
	handleSubmit: (
		event: ChangeEvent<HTMLFormElement>,
	) => void;
	handleChange: (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => void;
}