import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import LocationIndexContainer from './location/location_index_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LocationIndexContainer} />
    </Switch>
  </div>
);

export default App;
