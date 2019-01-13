import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./home";
import { Topics } from "./topics";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default AppRouter;