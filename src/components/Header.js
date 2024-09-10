import React from 'react';
import { NavLink} from 'react-router-dom'

export default function Header(){
    return(
        <div className='header'>
            <p>Shopping Application</p>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/cart'>Shopping Cart</NavLink>
            </div>
        </div>
    )
}