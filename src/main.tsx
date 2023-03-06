import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import nb from './language/src/nb.json';
import en from './language/src/en.json';
import { App } from './app/App';
import './index.css' ; // fixme: clean up global css

i18next.use(initReactI18next).init({
  lng: 'nb',
  resources: {
    nb: { translation: nb },
    en: { translation: en },
  },
  fallbackLng: 'nb',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename='dummyroot'>
    <App />
  </BrowserRouter>
);
