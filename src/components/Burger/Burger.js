import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
//Here in the props you will recieve the ingredients if any present if not simply it will write the messsage please start adding ingredients
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igkey => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {
                return <BurgerIngredient key={igkey + i} type={igkey} />;
            });
        }).reduce((arr, e1) => {
            return arr.concat(e1)
        }, []);

        if(transformedIngredients.length === 0){
             transformedIngredients = <p>Please start adding ingredients.!!</p>;
        }
    
    return (
        <div className='Burger'>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;