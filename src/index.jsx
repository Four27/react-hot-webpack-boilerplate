import React from 'react';
import ReactDOM from 'react-dom';
import 'react-hot-loader/patch';

import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./App.jsx', () => { render(RootContainer) });
}
