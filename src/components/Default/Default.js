import React from 'react'

import * as DefaultStyles from './styles'
import { MdMessage } from "react-icons/md";
function Default() {
	return (
		<DefaultStyles.DefaultContainer>
			<MdMessage />
			<DefaultStyles.Title>Chat App</DefaultStyles.Title>
			<DefaultStyles.Info>
				Agora você pode enviar mensagens.
			</DefaultStyles.Info>
		</DefaultStyles.DefaultContainer>
	)
}

export default Default
