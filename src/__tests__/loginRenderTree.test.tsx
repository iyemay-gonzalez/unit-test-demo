import { expect, test } from "@jest/globals";
import { create } from "react-test-renderer";
import LoginForm from "../components/loginComponent/loginForm.component";
import { renderHook } from '@testing-library/react-hooks';
import {useForm} from "../hooks/useForm";
import LoginRequest from "../request/loginRequest";
import {LoginFormValues} from "../components/loginComponent/loginForm.types";
import {initialValues} from "../components/loginComponent/formLogin.state";
import {build, fake} from "@jackfranklin/test-data-bot";

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

test("renders correctly with no pets", () => {
	const tree = create(
		<LoginForm
			formValues={result.current.formValues}
            handleChange={result.current.handleChange}
            handleSubmit={result.current.handleSubmit}
		/>
	).toJSON();
	expect(tree).toMatchSnapshot();
});