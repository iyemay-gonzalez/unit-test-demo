import React, {ChangeEvent, useContext, useEffect, useState} from 'react';
import InUseForm, {
	InUseFormReturn,
} from './useForm.types';
import { LoginFormValues } from "../../components/loginComponent/loginForm.types";


const useForm = ({
     initialValues,
     onSubmit,
 }: InUseForm): InUseFormReturn => {
	const [state, setState] = useState<LoginFormValues>({
		userName: initialValues.userName,
		userPassword: initialValues.userPassword,
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
		onSubmit(state);
	};
	
	return {
		formValues: state,
		handleChange,
		handleSubmit,
	};
}

export default useForm;