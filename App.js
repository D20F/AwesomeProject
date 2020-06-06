import React from 'react';

import Test from './src/view/Test'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/redux/reducers'
const store = createStore(
  reducer
)


const App = () => {
  return (
    <Provider store={store}>
      <Test />
    </Provider>
  );
};

export default App;


