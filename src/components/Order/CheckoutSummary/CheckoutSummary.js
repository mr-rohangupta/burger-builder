import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';
//Checkout summary is a functional component with the detailed description of what you buyed
//For Ex : props.checkoutContinued means that the component which is calling the checkoutSummary component will have the property checkoutContinued while passing
const checkoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'      >
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL
            </Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE
            </Button>
        </div >
    );
}

export default checkoutSummary;