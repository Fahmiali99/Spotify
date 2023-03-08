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
import Profile from "./Pages/Body/Profile";
import Search from "./Pages/Body/Search";

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
            {isAuthorized ? <Redirect to="/dashboard" /> : <LandingPage />}
          </Route>
          <Route exact path="/dashboard">
            {isAuthorized ? <Body logout={logout} /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/user">
            {isAuthorized ? <Profile logout={logout} /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/search">
            {isAuthorized ? <Search /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
