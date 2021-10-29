import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Detail from "../pages/CardDetail";
import GlobalStyle from "../utils/global";

const Index = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/games/:id" component={Detail} />
        </Switch>
      </Router>
  
      <GlobalStyle />
    </>
  );
};

export default Index;
