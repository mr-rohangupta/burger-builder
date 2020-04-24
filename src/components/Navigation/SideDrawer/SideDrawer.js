import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary/Auxillary';

//Functional Component which is opened and closed when the screen size is less i.e, in mobile
//You can see some navigation items like Orders,AUth and Logout
const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />

            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                    <Logo height="11%" margin-bottom="32px" />
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;