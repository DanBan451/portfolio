import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { site } from './content';

// Page <title> and description come from src/content/site.json (meta).
document.title = site.meta.title;
const descriptionTag = document.querySelector('meta[name="description"]');
if (descriptionTag) descriptionTag.setAttribute('content', site.meta.description);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
