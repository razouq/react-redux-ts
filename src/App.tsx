import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import RepositoriesList from './components/RepositoriesList';
import { store } from './state';

function App() {
  return (
    <Provider store={store}>
      <h1>Search for a Package</h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
