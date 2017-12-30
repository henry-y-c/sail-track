import React from 'react';
import ReactDOM from 'react-dom';

import Map from './components/Map.jsx';

const App = () => (
  <div>
    <Map 
      svgSize={{ w: 1134.1289, h: 824.63995 }}
      viewBox={{ x: 100, y: 200, w: 400, h: 400 }}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

// Turn on Webpack HMR (Hot Module Replacement) when necessary
if (module.hot) {
  module.hot.accept();
}
