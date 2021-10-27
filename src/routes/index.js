import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Main from "../pages/Home";
import Detail from "../pages/CardDetail";
import GlobalStyle from "../assets/css";
const Index = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/games/:id" component={Detail} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default Index;
