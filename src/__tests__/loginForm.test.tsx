import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import LoginForm from "../components/loginComponent";
import "@testing-library/jest-dom/extend-expect";


test("displays a default thumbnail", () => {
	const loginForm = render(<LoginForm />);
	
	const userNameInput = loginForm.getByTestId("userName");
	const userNameCast = userNameInput as HTMLInputElement;
	expect(userNameCast.value).toEqual("");
});