import React from 'react'

import AvatarIcon from './avatar/AvatarIcon'
import CalendarIcon from './calendar/CalendarIcon'
import ClockIcon from './clock/ClockIcon'
import ContactIcon from './contact/ContactIcon'
import HomeIcon from './home/HomeIcon'
import MenuIcon from './menu/MenuIcon'
import SettingIcon from './settings/SettingIcon'

export default function SideNavIcons() {
    return (
        <div >
            <MenuIcon/>
            <HomeIcon/>
            <AvatarIcon/>
            <ContactIcon/>
            <ClockIcon/>
            <CalendarIcon/>
            <SettingIcon/>
        </div>
    )
}
