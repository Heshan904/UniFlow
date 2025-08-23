
import './App.css';
import DashBord from './Pages/DashBord';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Qr from './Pages/Qr';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBord/>}/>
        <Route path='/qr' element={<Qr/>}/>
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
