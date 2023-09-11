import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyProvider } from "./context/backgrondContext"

const root = ReactDOM.createRoot(
  document.getElementById('view') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyProvider>
    <App />
    </MyProvider>
  </React.StrictMode>
);
