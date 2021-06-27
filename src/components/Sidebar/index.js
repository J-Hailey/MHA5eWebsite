import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarLink, SidebarRoute  } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='books' onClick={toggle}>Books</SidebarLink>
                    <SidebarLink to='moreinfo' onClick={toggle}>More Info</SidebarLink>
                    <SidebarLink to='extra' onClick={toggle}>Extra</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='#'>Discord</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
