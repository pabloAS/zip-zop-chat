import React from 'react'

import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
import * as ChatHeaderStyle from './styles'
function Chatheader({ photoURL, name }) {
	return (
		<ChatHeaderStyle.ChatHeaderContainer>
			<ChatHeaderStyle.UserInfo>
				{photoURL ? <ChatHeaderStyle.Avatar src={photoURL} alt='avatar' /> : <MdPerson />}
				<ChatHeaderStyle.NameContent>
					<ChatHeaderStyle.Name>
						{name}
					</ChatHeaderStyle.Name>
				</ChatHeaderStyle.NameContent>
			</ChatHeaderStyle.UserInfo>
			<ChatHeaderStyle.Options>
				<MdSearch />
				<MdMoreVert />
			</ChatHeaderStyle.Options>
		</ChatHeaderStyle.ChatHeaderContainer>
	)
}

export default Chatheader
