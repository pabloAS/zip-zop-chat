import React, { useEffect, useRef } from 'react'
import { db } from '../../../services/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import Messages from '../../Message'
import * as ChatBodyStyles from './styles'
function ChatBody({ chatId }) {
	const [messagesRes] = useCollection(
		db.collection("chats").doc(chatId).collection("messages").orderBy("timestamp", "asc")
	)
	const refBody = useRef("")
	useEffect(() => {
		if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
			refBody.current.scrollTop = refBody.current.scrollHeight - refBody.current.offsetHeight
		}
	}, [messagesRes])
	return (
		<ChatBodyStyles.ChatBodyContainer ref={refBody}>
			{messagesRes?.docs.map((message) => (
				<Messages
					key={message.id}
					user={message.data().user}
					message={{
						message: message.data().message,
						timestamp: message.data().timestamp?.toDate().getTime()
					}}
				/>
			))}
		</ChatBodyStyles.ChatBodyContainer>
	)
}

export default ChatBody
