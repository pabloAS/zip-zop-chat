import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from '../../../services/firebase'
import { useCollection } from "react-firebase-hooks/firestore";
import * as C from './styles'
import ChatItem from './SidebarChatItem/SidebarChatItem'
function SidebarChat({ setUserChat, userChat }) {
	const [user] = useAuthState(auth);
	const refChat = db
		.collection("chats")
		.where("users", "array-contains", user.email);

	const [chatsSnapshot] = useCollection(refChat)
	return (
		<C.ContainerChat>
			{
				chatsSnapshot?.docs.map((item, index) => (
					<C.Content key={index}>
						<ChatItem
							id={item.id}
							users={item.data().users}
							user={user}
							setUserChat={setUserChat}
							active={userChat?.chatId === item.id ? "active" : ""}
						/>
						<C.Divider />
					</C.Content>
				))
			}
		</C.ContainerChat>
	)
}

export default SidebarChat
