import { Route, Routes } from 'react-router-dom';
import { Forsteside } from '../pages/Forsteside';
import { Andreside } from '../pages/Andreside';
import { MiniDashboard } from '../pages/MiniDashboard';

export const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Forsteside /> } />
        <Route path='/andreside' element={<Andreside /> } />
        <Route path='/minidashboard' element={<MiniDashboard /> } />
      </Routes>
    </div>
  )
};
