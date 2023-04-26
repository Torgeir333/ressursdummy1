import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store'
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import nb from './language/src/nb.json';
import en from './language/src/en.json';
import { App } from './app/App';
import './index.css' ; // fixme: clean up global css
import { QueryClientProvider, QueryClient } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools'; // fra Vishwas Query video5
// settes i render-seksjon, like før lukking av QueryClientProvider,
// med to props, en for at man skal åpne selv, og at knapp er nede til høyre
// ved kjøring: se https://www.youtube.com/watch?v=PJSVowvL2MU&list=PLC3y8-rFHvwjTELCrPrcZlo6blLBUspd2&index=5
// Fjerner for bygging: <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />

i18next.use(initReactI18next).init({
  lng: 'nb',
  resources: {
    nb: { translation: nb },
    en: { translation: en },
  },
  fallbackLng: 'nb',
});

// wrap av app vil gi tilgang til alle hooks og metoder i React Query
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient} >
    <Provider store = { store }>
      <BrowserRouter basename='dummyroot'>
        <App />
      </BrowserRouter>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </QueryClientProvider>
);
