import React from 'react';



import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/redux/reducers'
const store = createStore(
  reducer
)


import Router from './src/router/index'











const App = () => {
  return (
    <Provider store={store}>
        <Router></Router>
    </Provider>
  );
};

export default App;


