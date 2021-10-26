import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '../pages/home';
import Detail from '../pages/CardDetail';
import GlobalStyle from '../assets/css';

const Index = () => {


  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/game/:id" component={Detail} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default Index;