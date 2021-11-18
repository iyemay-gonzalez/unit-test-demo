import { expect, test } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks';

import "@testing-library/jest-dom/extend-expect";
import { build, fake } from '@jackfranklin/test-data-bot';

import LoginForm from "../components/loginComponent/loginForm.component";
import { LoginFormValues } from "../components/loginComponent/loginForm.types";
import { initialValues } from "../components/loginComponent/formLogin.state";
import { useForm } from "../hooks/useForm";
import LoginRequest from "../request/loginRequest";

jest.mock("../request/loginRequest");

const mockRequest = LoginRequest as jest.MockedFunction<typeof LoginRequest>

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
		initialValues: newInitialValues,
		onSubmit: LoginRequest,
	}),
);

render(
	<LoginForm
		formValues={result.current.formValues}
		handleChange={result.current.handleChange}
		handleSubmit={result.current.handleSubmit}
	/>
);

test("the form has the correct masks in its inputs", () => {

	const userNameInput = screen.getByTestId("userName");
	const userNameCast = userNameInput as HTMLInputElement;
	expect(userNameCast.value).toMatch(/^[a-zA-ZÀ-ú ,.'-]+$/);
	
	// const userName = screen.getByTestId("userName");
	// const userNameCastInput = userName as HTMLInputElement;
	// expect(userNameCastInput.value).not.toBe(/^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/);
	//
	// const userPassInput = screen.getByTestId("userPass");
	// const userPassCast = userPassInput as HTMLInputElement;
	// expect(userPassCast.value).toMatch(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
	//
	// const buttonSesion = screen.getByTestId("buttonUser");
	// fireEvent.click(buttonSesion);
	// expect(mockRequest).toBeCalledTimes(1);
});



