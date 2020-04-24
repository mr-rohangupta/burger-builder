import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Aux from "../../hoc/Auxillary/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorhandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";
import * as actions from "../../store/actions/index";

const BurgerBuilder = (props) => {
  //useState in class would be like Ex below:
  //constructor(props) {
    //super(props);
    //this.state = {
      //purchasing: false
    //};
  //}
  const [purchasing, setPurchasing] = useState(false);

  //It acts as a replacement for mapDispatchToProps. It returns to the reference to the dispatch object.
  const dispatch = useDispatch();

  //**IMP**useSelector hook is a replacement of the mapStateToProps. It runs whenever function component renders. Its purpose is to extract data from the Redux store state.
  //useSelector will do a reference comparison with previous selector if change detected then only re-render else no re-rendering
  const ings = useSelector((state) => {
    return state.burgerBuilder.ingredients;
  });

  const price = useSelector((state) => state.burgerBuilder.totalPrice);

  const error = useSelector((state) => state.burgerBuilder.error);

  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  //addIngredient action is dispatched go to actions/burgerBuilder.js and check addIngredient 
  const onIngredientAdded = (ingName) => dispatch(actions.addIngredient(ingName));
  
  //removeIngredient action is dispatched go to actions/burgerBuilder.js and check removeIngredient
  const onIngredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName));

  //ingredients actions is dispatched go to actions/burgerBuilder.js and check initIngredients
  const onInitIngredients = useCallback(
    () => dispatch(actions.initIngredients()),
    [dispatch]
  );
  const onInitPurchase = () => dispatch(actions.purchaseInit());

  const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));

  //With useEffect, you can handle lifecycle events directly inside function components. Namely, three of them: componentDidMount, componentDidUpdate, and componentWillUnmount
  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, e1) => {
        return sum + e1;
      }, 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    if (isAuthenticated) {
      setPurchasing(true);
    } else {
      onSetAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseContinueHandler = () => {
    onInitPurchase();
    props.history.push("/checkout");
  };

  const disableInfo = {
    ...ings,
  };
  for (let key in disableInfo) {
    disableInfo[key] = disableInfo[key] <= 0;
  }
  //Logic to show spinner
  let orderSummary = null;
  let burger = error ? <p>Ingredients cant be loaded</p> : <Spinner />;

  if (ings) {
    burger = (
      <Aux>
        <Burger ingredients={ings} />
        <BuildControls
          ingredientAdded={onIngredientAdded}
          ingredientRemoved={onIngredientRemoved}
          disabled={disableInfo}
          purchasable={updatePurchaseState(ings)}
          ordered={purchaseHandler}
          isAuth={isAuthenticated}
          price={price}
        />
      </Aux>
    );
    //In OrderSummary we have the order details and also cancel and continue button
    orderSummary = (
      <OrderSummary
        ingredients={ings}
        price={price}
        purchaseCanceled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    );
  }

  //{salad: true, meats: false, ...}
  return (
    //Here it will show the order summary when you will click ordernow button
    //Here you will see the Burger Top Burger Bottom and all the ingredients which you wish to add
    //GOTO Burger.js and BuildControls.js
    <Aux>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </Aux>
  );
};

export default withErrorhandler(BurgerBuilder, axios);
