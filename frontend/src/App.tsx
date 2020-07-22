import React, { LazyExoticComponent, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface route {
  href: string;
  Component: LazyExoticComponent<any>;
  name: string;
}

const routes: route[] = [
  {
    href: "/",
    name: "Home",
    Component: React.lazy(() => import("./pages/Home")),
  },
  {
    href: "/about",
    name: "About",
    Component: React.lazy(() => import("./pages/About")),
  },
];

const App = () => (
  <Router>
    {routes.map(({ href, name }) => (
      <Link to={href}>{name}</Link>
    ))}
    <Switch>
      {routes.map(({ Component, href }) => (
        <Route path={href} exact>
          <Suspense fallback={<p>Loading...</p>}>
            <Component />
          </Suspense>
        </Route>
      ))}
    </Switch>
  </Router>
);

export default App;
