import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../../services/firebase";

import * as MessagesStyles from './styles'
function Message({ user, message }) {
	const [userLoggedIn] = useAuthState(auth);

	return (
		<MessagesStyles.MessagesContainer>
			<MessagesStyles.Line className={userLoggedIn?.email === user ? "me" : ""}>
				<MessagesStyles.Content>
					<MessagesStyles.Message>{message.message}</MessagesStyles.Message>
					<MessagesStyles.MessageData>
						{new Date(message?.timestamp).toLocaleString()}
					</MessagesStyles.MessageData>
				</MessagesStyles.Content>
			</MessagesStyles.Line>
		</MessagesStyles.MessagesContainer >
	)
}

export default Message
