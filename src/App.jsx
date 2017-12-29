import React from 'react';
import ReactDOM from 'react-dom';

import Map from './components/Map.jsx';

const App = () => (
  <div>
    <Map />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

// Turn on Webpack HMR (Hot Module Replacement) when necessary
if (module.hot) {
  module.hot.accept();
}
