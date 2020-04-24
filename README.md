Start Project Steps : 
Step 1 : Install Node Js
Step 2 : Clone master branch of this Project
Step 3 : Go to folder path and command prompt
Step 4 : Type command npm Install
Step 5 : After that npm Start
Step 6 : The server will up as localhost:3000

1) useSelector(): useSelector hook is a replacement of the mapStateToProps. It runs whenever function component renders. Its purpose is to extract data from the Redux store state.

2) useDispatch(): It acts as a replacement for mapDispatchToProps. It returns to the reference to the dispatch object.

3) useStore(): This returns the reference of the Redux store that was wrapped in the <provider>. It is not recommended for frequent use but can be used in scenarios like replacing reducers.

4)useEffect() : With useEffect, you can handle lifecycle events directly inside function components. Namely, three of them: componentDidMount, componentDidUpdate, and componentWillUnmount.

Ex useEffect : 
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function LifecycleDemo() {
  // It takes a function
  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!');

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log('unmounting...');
  })

  return "I'm a lifecycle demo";
}

function App() {
  // Set up a piece of state, just so that we have
  // a way to trigger a re-render.
  const [random, setRandom] = useState(Math.random());

  // Set up another piece of state to keep track of
  // whether the LifecycleDemo is shown or hidden
  const [mounted, setMounted] = useState(true);

  // This function will change the random number,
  // and trigger a re-render (in the console,
  // you'll see a "render!" from LifecycleDemo)
  const reRender = () => setRandom(Math.random());

  // This function will unmount and re-mount the
  // LifecycleDemo, so you can see its cleanup function
  // being called.
  const toggle = () => setMounted(!mounted);

  return (
    <>
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo/>}
    </>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));

