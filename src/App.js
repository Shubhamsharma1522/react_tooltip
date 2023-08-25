// App.js
import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div className="App">
      <h1>Tooltip Example</h1>
      <Tooltip text="This is a tooltip">
        <button>Hover Me</button>
      </Tooltip>
    </div>
  );
};

export default App;
