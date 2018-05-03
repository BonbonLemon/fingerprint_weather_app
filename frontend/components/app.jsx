import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import AdminContainer from './admin/admin_container';
import LocationIndexContainer from './location/location_index_container';
import LocationShowContainer from './location/location_show_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/admin" component={AdminContainer} />
      <Route exact path="/" component={LocationIndexContainer} />
      <Route exact path="/locations/:id" component={LocationShowContainer} />
    </Switch>
  </div>
);

export default App;
