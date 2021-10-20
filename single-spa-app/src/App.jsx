import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

export const App = () => (
  <div>
    <h1>React Application</h1>
  </div>
);

const headerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;

export default App;
