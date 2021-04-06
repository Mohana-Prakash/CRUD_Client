import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './input.css'

class Input extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:""
        }
    }
    
    UserSearch = (e) => {
        this.setState({
            user : e.target.value
        })
    }
    render() {
        
        return (
            <div className='searchInput'>
                <input placeholder='Search Contacts' onChange={this.UserSearch} value={this.state.user}/>
                <SearchIcon className='searchInputIcon'/> 
            </div>
        )
    }
}

export default Input

