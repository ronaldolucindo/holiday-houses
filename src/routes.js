import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const SearchHouses = lazy(() => import('./pages/search-houses'));
const HouseList = lazy(() => import('./pages/house-list'));

function Routes(props) {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={props => <SearchHouses {...props} />}
          />
          <Route
            exact
            path="/search/:term"
            component={props => <HouseList {...props} />}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Routes;
