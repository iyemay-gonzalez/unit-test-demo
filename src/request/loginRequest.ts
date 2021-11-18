import { LoginFormValues } from '../components/loginComponent/loginForm.types';

export const request = async (): Promise<any> => {
	const response = await fetch('https://reqres.in/api/login', {
		method: 'POST',
		body: JSON.stringify({
			email: "eve.holt@reqres.in",
			password: "cityslicka"
		}),
		headers:{
			'Content-Type': 'application/json'
		}
	})
	console.log(response);
}
export const doLogin = (state: LoginFormValues): void => {
	request();
}
// import { request } from './fetchLogin'
// jest.mock(request)
// test('') { }