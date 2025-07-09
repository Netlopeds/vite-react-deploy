import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Commissions() {
  return (
    <Container fluid className="p-0">
      <div className="profile-section">
        <div className="commission-header">
          <h1 className="commission-title">COMMISSION</h1>
          <span className="commission-subtitle">
            check on{' '}
            <a
              href="https://twitter.com/19Vodnik"
              target="_blank"
              rel="noopener noreferrer"
              className="commission-link"
            >
              twitter
            </a>{' '}
            if comms are open!
          </span>
        </div>
        <p className="commission-info">
          For commercial work, please email me at{' '}
          <a href="mailto:19Vdnk@gmail.com" className="commission-link">
            19Vdnk@gmail.com
          </a>{' '}
          separately to discuss.
        </p>
        <hr className="commission-divider" />
        <div className="prices-header">
          <h2 className="prices-title">PRICES</h2>
          <span className="prices-subtitle">
            more examples{' '}
            <a href="https://docs.google.com/document/d/1r2QLuwzek1kqTwQCRIoyqUyFvLIqFHsS/edit?tab=t.0#heading=h.arnyx5tudz45" className="commission-link" target="_blank" rel="noopener noreferrer">
              here!
            </a>
          </span>
        </div>

        <div className="commission-item">
          <Row className="align-items-center gy-3">
            <Col md={5}>
              <Image
                src={import.meta.env.BASE_URL + '/Images/commission_example_lineart.jpg'}
                fluid
              />
            </Col>
            <Col md={7}>
              <p className="commission-details">
                <span className="commission-price">50$</span> - SKETCH/LINEART ONLY
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default Commissions;