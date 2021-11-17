import React from "react";
import { LoginFormComponent } from './loginForm.types';
import {
	Container,
	FormContainer,
	TitleContainer,
	ButtonContainer,
	InputContainer,
} from "./loginForm.styles";

const LoginForm: React.FC<LoginFormComponent> = (
	props:LoginFormComponent,
) => {
	const {
		formValues,
		handleChange,
		handleSubmit,
	} = props;
	return (
		<Container>
			<FormContainer>
				<TitleContainer>
					<h1 className="card-title">Demo Pruebas Unitarias</h1>
				</TitleContainer>
				<form>
					<InputContainer>
						<div className="form-group">
							<label htmlFor="exampleInputName">Usuario</label>
							<input type="name" className="form-control" value={formValues.userName} id="exampleInputName"
							       onChange={handleChange}/>
						</div>
					</InputContainer>
					<InputContainer>
						<div className="form-group">
							<label htmlFor="exampleInputPassword">Contraseña</label>
							<input type="password" className="form-control" value={formValues.userPassword} id="exampleInputPassword"
							       onChange={handleChange}
							/>
						</div>
					</InputContainer>
					<ButtonContainer>
						<button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>Iniciar Sesión</button>
					</ButtonContainer>
				</form>
			</FormContainer>
		</Container>
		
	);
};

export default LoginForm;