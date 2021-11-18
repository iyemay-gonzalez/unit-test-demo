export default async (userName: string, userPassword: string): Promise<any> => {
	const response = await fetch('https://reqres.in/api/login', {
		method: 'POST',
		body: JSON.stringify({
			email: userName,
			password: userPassword,
		}),
		headers:{
			'Content-Type': 'application/json'
		}
	})
	const data = await response.json();
	return data;
}

