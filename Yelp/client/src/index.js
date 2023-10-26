import React from 'react';
import App from "./App"
import { createRoot } from 'react-dom/client';

//ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17

const root = createRoot(document.getElementById('root'));
root.render(<App />); 