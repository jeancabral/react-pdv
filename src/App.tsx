import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import Routes from './routes';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
