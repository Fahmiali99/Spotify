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
import Body from "./Pages/Body";

function App() {
  const dispatch = useDispatch();
  let { isAuthorized } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(removeToken());
    localStorage.clear();
  };

  return (
    <Router>
      <div className=" text-white  ">
        <Switch>
          <Route exact path="/">
            {isAuthorized ? (
              <Redirect exact from="/" to="/dashboard" />
            ) : (
              <LandingPage />
            )}
          </Route>
          <Route path="/dashboard">
            {!isAuthorized ? (
              <Redirect exact from="/dashboard" to="/" />
            ) : (
              <Body logout={logout} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
