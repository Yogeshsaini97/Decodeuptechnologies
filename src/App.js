import logo from './logo.svg';
import './App.css';
import Formone from './Components/Formone';
import { Routes,Route, BrowserRouter } from 'react-router-dom'  
import Formtwo from './Components/Formtwo';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Formone/>}/>
      <Route exact path="/Formtwo" element={<Formtwo/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
