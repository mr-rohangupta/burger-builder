import React from 'react';
import './BuildControl.css';
//BuildControl accepts the props from BuildControls and also add the handling buttons like More and Less
const buildControl = (props) => (
    <div className = 'BuildControl'>
        <div className = 'Label'>{props.label}</div>
        <button className = 'Less' 
            onClick={props.removed} 
            disabled={props.disabled}>Less</button>
        <button className = 'More' onClick={props.added}>More</button>
    </div>
);

export default buildControl;