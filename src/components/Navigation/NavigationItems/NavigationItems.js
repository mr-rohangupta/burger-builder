import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

//Functional components called from side drawer with navigating options like orders,logout and authenticate
const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
