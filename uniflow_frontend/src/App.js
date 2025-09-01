
import './App.css';
import DashBord from './Pages/DashBord';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Qr from './Pages/Qr';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/qr' element={<Qr/>}/>
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
