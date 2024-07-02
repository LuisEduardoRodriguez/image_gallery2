import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Zodiacal1 } from './components/Zodiacal1';
import { Zodiacal2 } from './components/Zodiacal2';
import { Zodiacal3 } from './components/Zodiacal3';
import { Zodiacal4 } from './components/Zodiacal4';
import { Zodiacal5 } from './components/Zodiacal5';
import { Zodiacal6 } from './components/Zodiacal6';
import { Navigation } from './components/Navigation';

function App() {


  return (
    <>
      <BrowserRouter>
        <div>
          <h1 id="title" className='text-center my-3'>Proyecto Galería</h1>
        </div>
        <Routes>
          <Route path="/Zodiacal1" element={<Zodiacal1 className='image-size'/>} />
          <Route path="/Zodiacal2" element={<Zodiacal2 className='image-size'/>} />
          <Route path="/Zodiacal3" element={<Zodiacal3 className='image-size'/>} />
          <Route path="/Zodiacal4" element={<Zodiacal4 className='image-size'/>} />
          <Route path="/Zodiacal5" element={<Zodiacal5 className='image-size'/>} />
          <Route path="/Zodiacal6" element={<Zodiacal6 className='image-size'/>} />
        </Routes>
        <Navigation/>
      </BrowserRouter>
    </>
  )
}

export default App