import { LoginFormValues } from "../../components/loginComponent/loginForm.types";

interface InUseForm {
	initialValues: LoginFormValues;
	onSubmit: Function;
}

export interface InUseFormReturn {
	formValues: LoginFormValues;
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => void;
	handleSubmit: (
		event: React.ChangeEvent<HTMLFormElement>
	) => void;
}

declare const InUseForm: InUseForm;

export default InUseForm;