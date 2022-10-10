import React from 'react'

import ChatHeader from '../Chat/ChatHeader/Chatheader'
import ChatBody from '../Chat/ChatBody/ChatBody'
import ChatFooter from '../Chat/ChatFooter/ChatFooter'
import Default from '../Default/Default'

import * as ChatStyle from './styles'
function Chat({ userChat }) {
	if (!userChat) return <Default />
	return (
		<ChatStyle.ChatContainer>
			<ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
			<ChatBody chatId={userChat?.chatId} />
			<ChatFooter chatId={userChat?.chatId} />
		</ChatStyle.ChatContainer>
	)
}

export default Chat
