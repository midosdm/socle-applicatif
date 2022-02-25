import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Candidats from './Components/Candidats/Candidats';
import Enseignants from './Components/Enseignants/Enseignants';
import Formations from './Components/Formations/Formations';
import Promotions from './Components/Promotions/Promotions';

function App() {
  return (
    <>
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/candidats">
          <Candidats />
        </Route>
        <Route exact path="/enseignants">
          <Enseignants />
        </Route>
        <Route exact path="/formations">
          <Formations />
        </Route>
        <Route exact path="/promotions">
          <Promotions/>
        </Route>
      </Switch>
      </Layout>
    </Router>
      
    </>
  );
}

export default App;
