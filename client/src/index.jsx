import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Eski yöntem (deprecated)
// ReactDOM.render(<App />, document.getElementById('root'));

// Yeni yöntem
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
