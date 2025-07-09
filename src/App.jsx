import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Home';
import Contact from './pages/contact';
import About from './pages/about';
import Comissions from './pages/commissions';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/commissions" element={<Comissions />} />
        
      </Routes>
    </Router>
  );
}

export default App;
