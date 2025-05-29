import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./homepage"
import Versenyzok from "./Versenyzok"
import "./bootstrap.min.css"
function App() {
  return (
   <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/resztvevok" element={<Versenyzok />}></Route>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
