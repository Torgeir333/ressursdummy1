import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import nb from './language/src/nb.json';
import en from './language/src/en.json';
import { App } from './app/App';
import './index.css' ; // fixme: clean up global css
import { QueryClientProvider, QueryClient } from 'react-query';

i18next.use(initReactI18next).init({
  lng: 'nb',
  resources: {
    nb: { translation: nb },
    en: { translation: en },
  },
  fallbackLng: 'nb',
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient} >
    <Provider store = { store }>
      <BrowserRouter basename='dummyroot'>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);
