import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

export default function App() {
  return <h1>Hello my gorgeous friends!!</h1>;
}

const headerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;
