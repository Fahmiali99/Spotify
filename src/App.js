import React, { useEffect } from "react";
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
  let { token } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(removeToken());
    window.localStorage.removeItem("token");
  };

  return (
    <Router>
      <div className="bg-slate-900 text-white  ">
        <Switch>
          <Route exact path="/">
            {token ? (
              <Redirect exact from="/" to="/create-playlist" />
            ) : (
              <LandingPage />
            )}
          </Route>
          <Route path="/create-playlist">
            {!token ? (
              <Redirect exact from="/create-playlist" to="/" />
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
