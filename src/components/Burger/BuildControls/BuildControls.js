import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

//Component is used to show the options to add burger and also passes its props to BuildControl.js
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
    //The logic here is to display the options of all the ingredients name like totalPrice, salad,bacon,meat,cheese and order button
    <div className='BuildControls'>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button className='OrderButton'
            disabled={!props.purchasable} onClick={props.ordered}>{props.isAuth? 'ORDER NOW' : 'SIGN UP TO ORDER '}</button>
    </div>
);

export default buildControls;