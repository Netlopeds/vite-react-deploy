import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Home';
import Contact from './pages/contact';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
