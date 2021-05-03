import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SaunaPage from "./components/pages/SaunaPage";
import HomePage from "./components/pages/HomePage";

const App: React.FC = () => {
  return (
     <Router>
      <Switch>
        <Route path="/sauna" component={SaunaPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
};

export default App;
