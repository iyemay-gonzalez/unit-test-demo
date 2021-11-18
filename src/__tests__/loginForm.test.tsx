import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks';

import "@testing-library/jest-dom/extend-expect";
import { build, fake } from '@jackfranklin/test-data-bot';

import LoginForm from "../components/loginComponent/loginForm.component";
import { LoginFormValues } from "../components/loginComponent/loginForm.types";
import { initialValues } from "../components/loginComponent/formLogin.state";
import { useForm } from "../hooks/useForm";
import { TyValues } from "../hooks/useForm/useForm.types";


interface Form {
	userName: string;
	userPassword: string;
}

const buildForm = build<Form>({
	fields: {
		userName: fake(f => f.name.findName()),
		userPassword: 'Pass123@-%@2',
	},
});

const {
	userName,
	userPassword,
} = buildForm();

const newInitialValues: LoginFormValues = {
	...initialValues,
	userName: userName,
	userPassword: userPassword,
};

const { result } = renderHook(() =>
	useForm({
		initialValues: newInitialValues as TyValues,
		onSubmit: jest.fn(),
	}),
);

render(
	<LoginForm
		formValues={result.current.formValues}
		handleSubmit={result.current.handleSubmit}
		handleChange={result.current.handleChange}
	/>,
);

test("the form has the correct masks in its name inputs", () => {

	const userNameInput = screen.getByTestId("userName");
	const userNameCast = userNameInput as HTMLInputElement;
	expect(userNameCast.value).toMatch(/^[a-zA-ZÀ-ú ,.'-]+$/);
});


/** test("the form does not accepts incorrect masks in your name entries", () => {
	const userNameInput = screen.getByTestId("userName");
	const userNameCast = userNameInput as HTMLInputElement;
	expect(userNameCast.value).not.toBe(/^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)
});


test("the form has the correct masks on its inputs password", () => {
	const userPassInput = screen.getByTestId("userPass");
	const userPassCast = userPassInput as HTMLInputElement;
	expect(userPassCast.value).toMatch(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
});

test("the form does not accepts the correct masks in your input password", () => {
	const userPassInput = screen.getByTestId("userPass");
	const userPassCast = userPassInput as HTMLInputElement;
	expect(userPassCast.value).not.toBe(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
});
**/

