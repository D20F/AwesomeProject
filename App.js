import React from 'react';

import Test from './src/view/Test'
import Chat from './src/view/Chat'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/redux/reducers'
const store = createStore(
  reducer
)


const App = () => {
  return (
    <Provider store={store}>
      {/* <Test /> */}
      <Chat />
    </Provider>
  );
};

export default App;


