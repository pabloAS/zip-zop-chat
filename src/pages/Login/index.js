import React from 'react'
import { auth, provider } from '../../services/firebase'

import Ok from '../../../src/assets/img/ok.gif'
import { ContainerLogin, LoginInfos } from './styles'
function Login() {
	const handleLogin = () => {
		auth.signInWithPopup(provider).catch(alert)
	}
	return (
		<ContainerLogin >
			<LoginInfos className='Login'>
				<h1>Seja Bem Vindo</h1>
				<img src={Ok} alt='uma pessoa digitando e fazendo um sinal com o polegar' />
				<button onClick={handleLogin}>
					Login Com a Conta Google
				</button>
			</LoginInfos>
		</ContainerLogin>
	)
}

export default Login
