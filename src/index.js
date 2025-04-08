import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import Text from './textApp/textApp.jsx'
// import App1 from './setAge/setAge.jsx'
import OnChange from './onChange/onChange-useState.jsx';
import ColorOnChange from './color-onChange/color_onChange.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorOnChange />
    {/* <App1 /> */}
    <OnChange />
      <App />

    <Text />
  </React.StrictMode>
);



