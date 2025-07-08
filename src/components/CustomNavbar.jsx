import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar() {
  const location = useLocation();

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Image
            src={import.meta.env.BASE_URL +"/Images/vodnik_logo.jpg"}
            width={100}
            height={100}
            roundedCircle
            className="me-2"
          />
          <span className="brand-name">VODNIK</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/" className={`nav-item-link ${location.pathname === '/' ? 'active' : ''}`}>HOME</Nav.Link>
            <Nav.Link href="#commissions" className="nav-item-link">COMMISSIONS</Nav.Link>
            <Nav.Link as={Link} to="/contact" className={`nav-item-link ${location.pathname === '/contact' ? 'active' : ''}`}>CONTACT</Nav.Link>
            <Nav.Link href="#about" className="nav-item-link">ABOUT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
