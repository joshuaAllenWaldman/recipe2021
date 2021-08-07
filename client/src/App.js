import axios from 'axios';
import { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import { TokenContext } from './hooks/useApi';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import NewRecipePage from './pages/NewRecipePage';
import ShowRecipePage from './pages/ShowRecipePage';

function App() {
  let history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState({ token: undefined });

  return (
    <TokenContext.Provider value={token}>
      <div className="App">
        <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
        <Switch>
          {isLoggedIn && (
            <Route
              path="/home"
              render={(props) => (
                <HomePage
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                  {...props}
                />
              )}
            />
          )}
          {isLoggedIn && (
            <Route
              path="/recipe/new"
              render={(props) => (
                <NewRecipePage token={token} isLoggedIn={isLoggedIn} {...props} />
              )}
            />
          )}
          {isLoggedIn && (
            <Route
              path="/recipe/:id"
              render={(props) => (
                <ShowRecipePage token={token} isLoggedIn={isLoggedIn} {...props} />
              )}
            />
          )}

          <Route
            path="/"
            render={(props) => (
              <AuthPage
                setToken={setToken}
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    </TokenContext.Provider>
  );
}

export default App;
