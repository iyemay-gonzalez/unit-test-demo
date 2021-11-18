export type TyValues = Record<string, string>;

interface InUseForm {
	initialValues: TyValues;
	onSubmit: Function;
}

export interface InUseFormReturn {
	formValues: TyValues;
	handleChange: (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => void;
	handleSubmit: (
		event: React.ChangeEvent<HTMLButtonElement>
	) => void;
}

declare const InUseForm: InUseForm;

export default InUseForm;