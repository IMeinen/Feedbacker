import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Feedbacks from './pages/Feedbacks';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/feedbacks" component={Feedbacks} exact />
      </Switch>
    </BrowserRouter>
  );
}
