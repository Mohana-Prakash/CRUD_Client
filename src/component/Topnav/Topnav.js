import React from 'react'
import './topnav.css'

import TopNavLeft from './topNavLeft/SearchIcon'
import TopNavRight from './topNavRight/TopNavRight'

export default function Topnav() {
    return (
        <div className='topnav'>
            <TopNavLeft/>
            <TopNavRight/>
        </div>
    )
}
