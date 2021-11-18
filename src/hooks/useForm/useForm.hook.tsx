import React, { useContext, useEffect, useState } from 'react';
import InUseForm, {
	InUseFormReturn,
	TyValues,
} from './useForm.types';

const useForm = ({
     initialValues,
     onSubmit,
 }: InUseForm): InUseFormReturn => {
	const [formValues, setFormValues] = useState<TyValues>(initialValues);
	
	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	): void => {
		const { target } = event;
		const name = target.name;
		const value = target.value;
		setFormValues({
			[name]: value
		})
	};
	
	const handleSubmit = (event: React.ChangeEvent<HTMLButtonElement>): void => {
	
	};
	
	return {
		formValues,
		handleChange,
		handleSubmit,
	};
}

export default useForm;