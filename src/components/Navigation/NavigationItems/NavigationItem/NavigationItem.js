import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';

//Navigation Item is a functional component which will make the selected link as active
const navigationItem = (props) => (
    <li className='NavigationItem'>
        <NavLink to={props.link} exact={props.exact} activeClassName='active'>{props.children}
        </NavLink>
    </li>
);

export default navigationItem;