import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
function Footer() {
    return (
        <BottomNavigation>
            <BottomNavigationAction label="Twitter" icon={<TwitterIcon style={{fill: "#1da1f2"}} /> }/>
            <BottomNavigationAction label="YouTube" icon={<YouTubeIcon style={{fill: "#c4302b"}} /> }/>
        </BottomNavigation>
    )
}

export default Footer
