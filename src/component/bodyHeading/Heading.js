import React from 'react'
import './heading.css'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Heading() {
    return (
        <div>
            <div className='heading'>
                <PermContactCalendarIcon className='contacticon' />
                <div className='contacts'>
                    <h1>Contacts</h1>
                    <h4>Welcome to FlatCRM Contact page</h4>
                </div>
                <div className='contactSort'>
                    <h5>Sort by: <span>Date Created</span></h5>
                    <ExpandMoreIcon className='down' />
                </div>
            </div>
        </div>
    )
}
