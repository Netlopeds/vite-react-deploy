import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function About() {
  return (
    <Container fluid className="p-0">
      <div className="profile-section">
        <h1 className="contact-title">About Me</h1>
        <p className="contact-text">
          Information about me will be available here soon.
        </p>
      </div>
    </Container>
  );
}

export default About;