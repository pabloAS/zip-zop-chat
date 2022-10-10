import React from 'react'
import SiderbarHeader from '../Sidebar/SidebarHeader/SidebarHeader'
import SidebarChat from '../Sidebar/SidebarChat/SidebarChat'
import * as C from './styles'

function Sidebar({ setUserChat, userChat }) {
	return (
		<C.ContainerSaidebar>
			<SiderbarHeader setUserChat={setUserChat} />
			<SidebarChat setUserChat={setUserChat} userChat={userChat} />
		</C.ContainerSaidebar>
	)
}

export default Sidebar
