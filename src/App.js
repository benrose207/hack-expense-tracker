import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/Navigation/navbar.jsx';
import AccountsIndex from './components/Accounts/accounts.jsx';
import CategoriesIndex from './components/Categories/categories.jsx';
import Expenses from './components/Expenses/expenses.jsx';
import { AppContextProvider } from './reducers/store';

function App() {
  return (
    <>
      <NavBar />
      <AppContextProvider>
        <Route exact path="/">
          <Expenses />
        </Route>
        <Route path="/accounts">
          <AccountsIndex />
        </Route>
        <Route path="/categories">
          <CategoriesIndex />
        </Route>
      </AppContextProvider>
    </>
  );
}

export default App;
