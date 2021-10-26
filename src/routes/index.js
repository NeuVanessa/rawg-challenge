import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from '../pages/home';
import Detail from '../pages/Detail';
import GlobalStyle from '../assets/css';

const Index = () => {


  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route  path="/games/:id" render={({ match }) => (
            <Detail key={match.params.id} match={match} />
          )} />
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
};

export default Index;