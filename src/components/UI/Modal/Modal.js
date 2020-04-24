import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/Auxillary/Auxillary";
import Backdrop from "../Backdrop/Backdrop";

//The Component is useful for showing the modal element
const Modal = (props) => {
  // shouldComponentUpdate(nextProps, nextState) {
  //     return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  // }

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

//When a component is wrapped with React.memo(), React renders the component and memorizes the result.
//Before the next render, if the new props are same, React reuses the memorized result skipping the next rendering
export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
