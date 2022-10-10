import React from 'react'
import { MdDonutLarge, MdChat, MdMoreVert } from 'react-icons/md'
import * as EmailValidator from 'email-validator'
import { auth, db } from '../../../services/firebase'
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import * as C from './styles'
function SidebarHeader({ setUserChat }) {
	const [user] = useAuthState(auth)
	const refChat = db
		.collection("chats")
		.where("users", "array-contains", user.email);
	const [chatsSnapshot] = useCollection(refChat)
	const handleCreateChat = () => {
		const emailInput = prompt("Escreva o email desejado");

		if (!emailInput) return;
		if (!EmailValidator.validate(emailInput)) {
			return alert("Email invalido!");
		} else if (emailInput === user.email) {
			return alert("Insira um email diferente do seu")
		} else if (chatExists(emailInput)) {
			return alert("Chat já existe")
		}

		db.collection("chats").add({
			users: [user.email, emailInput]
		})
	}
	const chatExists = (emailChat) => {
		return !!chatsSnapshot?.docs.find(
			(chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
		)
	}
	return (
		<C.ContainerHeader>
			<C.Avatar src={user?.photoURL}
				onClick={() => [auth.signOut(), setUserChat(null)]}
			/>
			<C.Options>
				<MdDonutLarge />
				<MdChat onClick={handleCreateChat} />
				<MdMoreVert />
			</C.Options>
		</C.ContainerHeader>
	)
}

export default SidebarHeader
