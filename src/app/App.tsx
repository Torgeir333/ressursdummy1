import { Route, Routes } from 'react-router-dom';
import { Forsteside } from '../pages/Forsteside';
import { Andreside } from '../pages/Andreside';
import { MiniDashboard } from '../pages/MiniDashboard';
import { QuerySide } from '../pages/QuerySide';

export const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Forsteside /> } />
        <Route path='/andreside' element={<Andreside /> } />
        <Route path='/minidashboard' element={<MiniDashboard /> } />
        <Route path='/queryside' element={<QuerySide /> } />
      </Routes>
    </div>
  )
};
