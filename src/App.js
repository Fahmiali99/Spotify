import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { useSelector, useDispatch } from "react-redux";
import { removeToken } from "./Store/auth";
import Dashboard from "./Pages/Dashboard";

function App() {
  const dispatch = useDispatch();
  let { isAuthorized } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(removeToken());
    localStorage.clear();
  };

  return (
    <Router>
      <div className="bg-slate-900 text-white  ">
        <Switch>
          <Route exact path="/">
            {isAuthorized ? (
              <Redirect exact from="/" to="/Dashboard" />
            ) : (
              <LandingPage />
            )}
          </Route>
          <Route path="/Dashboard">
            {!isAuthorized ? (
              <Redirect exact from="/Dashboard" to="/" />
            ) : (
              <Dashboard logout={logout} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
