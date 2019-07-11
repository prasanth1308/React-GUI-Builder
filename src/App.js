import React, { lazy, Suspense }  from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { PublicRoute } from './routes/PublicRoute';
import ErrorBoundary from './utils/ErrorBoundary/ErrorBoundary';
import Spinner from './components/Loader/Loader';
import logo from './logo.svg';

const Home = lazy(() => import('./layouts/Home'));

// Async Component for code splitting
const asyncComponent = Component => {
  return props => (
    <Suspense fallback={<Spinner active />}>
      <Component {...props} />
    </Suspense>
  );
}
const hist = createBrowserHistory();
function App() {
  return (
    <ErrorBoundary>
        <Router history={hist}>
          <Switch>
            <PublicRoute exact path="/" component={asyncComponent(Home)} />
            <ProtectedRoute
              exact
              path="/dashboard"
              component={asyncComponent(Home)}
            />
          </Switch>
        </Router>
      </ErrorBoundary>
  );
}

export default App;