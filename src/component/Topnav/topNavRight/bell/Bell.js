import React from 'react'
import './bell.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export default function Bell() {
    return (
        <div className='bell'>
            <NotificationsNoneIcon className='bellicon'/>
        </div>
    )
}
