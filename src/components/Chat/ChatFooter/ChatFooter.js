import React, { useState } from 'react'
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../../../services/firebase'
import { MdSend } from 'react-icons/md'
import * as ChatFooterStyles from './styles'
function ChatFooter({ chatId }) {
	const [user] = useAuthState(auth)
	const [message, setMessage] = useState("")
	const handleSendMessage = (e) => {
		e.preventDefault()
		db.collection("chats").doc(chatId).collection("messages").add({
			message: message,
			user: user.email,
			photoURL: user.photoURL,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setMessage("")
	}
	return (
		<ChatFooterStyles.ChatFooterContainer>
			<ChatFooterStyles.Form onSubmit={handleSendMessage}>
				<ChatFooterStyles.Input
					placeholder='Mensagem'
					onChange={(e) => setMessage(e.target.value)}
					value={message}
				/>
				<MdSend onClick={handleSendMessage} />
			</ChatFooterStyles.Form>
		</ChatFooterStyles.ChatFooterContainer>
	)
}

export default ChatFooter
