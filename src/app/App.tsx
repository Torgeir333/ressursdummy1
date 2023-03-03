import { Route, Routes } from 'react-router-dom';
import { Forsteside, Andreside } from '../pages';
// import { useNavigate } from 'react-router-dom'; // can only be used in the context
// of a <Router> component. Får kjøre wrap i main.tsx senere.

export const App = () => {
  

  // const navigate = useNavigate(); // bruk til link fra ikon

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Forsteside /> } />
        <Route path='/andreside' element={<Andreside /> } />
      </Routes>
    </div>
  )
};
