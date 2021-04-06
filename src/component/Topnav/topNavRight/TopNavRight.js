import React from 'react'
import './topNavRight.css'

import Add from './add/Add'
import Mail from './mail/Mail'
import Name from './name/Name'
import Bell from './bell/Bell'

export default function TopNavRight() {
    return (
        <div className='top_nav_right'>
            <Add/>
            <Mail/>
            <Name/>
            <Bell/>
        </div>
    )
}
