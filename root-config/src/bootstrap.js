import { start, registerApplication } from "single-spa";

/**
 * Register applications here
 */

// registerApplication(
//   "reactApp",
//   () => import("reactApp/ApplicationPage"),
//   () => true
// );

registerApplication({
  name: "react-app",
  app: () => import("reactApp/ApplicationPage"),
  activeWhen: ["/react"],
});

start();
