
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx';
import KidsClothes from './components/WomenClothes.jsx'
import MenClothes from './components/MenClothes.jsx'
import WomenClothes from './components/WomenClothes.jsx'

function Men() {
  return (
    <div>
      <h1>Men Section</h1>
      <MenClothes />
    </div>
  );
}

function Women() {
  return (
  <div>
      <h1>Women Section</h1>
      <WomenClothes />
  </div>
  );
}

function Kids() {
  return (
  <div>
      <h1>Kids Section</h1>
      <KidsClothes />
  </div>
  );
}

export default function App() {
  
    return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mens" element={<Men />} />
            <Route path="/womens" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        
      </div>
      </Router>
  )
}
