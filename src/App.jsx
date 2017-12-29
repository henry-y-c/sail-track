import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld.jsx';

const App = () => (
  <div>
    <HelloWorld />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

// Turn on Webpack HMR (Hot Module Replacement) when necessary
if (module.hot) {
  module.hot.accept();
}
