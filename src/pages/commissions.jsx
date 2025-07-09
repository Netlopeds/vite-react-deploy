import { Container, Row, Col, Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Commissions() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Add escape key handler
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };

    // Add event listener when modal is open
    if (selectedImage) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [selectedImage]);

  return (
    <Container fluid className="p-0 commission-page">
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
              Twitter
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
              <div className="commission-image-container">
                <Image
                  src={import.meta.env.BASE_URL + '/Images/commission_example_lineart.jpg'}
                  fluid
                  onClick={() => handleImageClick(import.meta.env.BASE_URL + '/Images/commission_example_lineart.jpg')}
                />
              </div>
              <div className="commission-image-container">
                <Image
                  src={import.meta.env.BASE_URL + '/Images/commission_example_lineart_painted.jpg'}
                  fluid
                  onClick={() => handleImageClick(import.meta.env.BASE_URL + '/Images/commission_example_lineart_painted.jpg')}
                />
              </div>
            </Col>
            <Col md={7} className="d-flex align-items-center justify-content-center">
              <div className="text-center text-md-start">
                <p className="commission-details">
                  <span className="commission-price">50$</span> - SKETCH/LINEART ONLY
                </p>
                <p className="commission-details-3">
                  <span className="commission-price">75$</span> - LINEART COLORED 
                </p>
              </div>
            </Col>
          </Row>
        </div>
        
        <div className="commission-item">
          <Row className="align-items-center gy-3">
            <Col md={5}>
              <div className="commission-image-container">
                <Image
                  src={import.meta.env.BASE_URL + '/Images/commission_example_painted_render.jpg'}
                  fluid
                  onClick={() => handleImageClick(import.meta.env.BASE_URL + '/Images/commission_example_painted_render.jpg')}
                />
              </div>
              <div className="commission-image-container">
                <Image
                  src={import.meta.env.BASE_URL + '/Images/commission_example_painted_render_2.jpg'}
                  fluid
                  onClick={() => handleImageClick(import.meta.env.BASE_URL + '/Images/commission_example_painted_render_2.jpg')}
                />
              </div>
            </Col>
            <Col md={7} className="d-flex align-items-center justify-content-center">
              <div className="text-center text-md-start">
                <p className="commission-details-4">
                  <span className="commission-price">200$</span> - PAINTED RENDER WITH BG (FULL ILLUSTRATION)
                </p>
              </div>
            </Col>
          </Row>
        </div>
        
        <div className="commission-item">
          <Row className="align-items-center gy-3">
            <Col md={5}>
              <div className="commission-image-container">
                <Image
                  src={import.meta.env.BASE_URL + '/Images/commission_example_charactersheet.jpg'}
                  fluid
                  onClick={() => handleImageClick(import.meta.env.BASE_URL + '/Images/commission_example_charactersheet.jpg')}
                />
              </div>
              <div className="commission-image-container">
                <Image
                  src={import.meta.env.BASE_URL + '/Images/commission_example_charactersheet2.jpg'}
                  fluid
                  onClick={() => handleImageClick(import.meta.env.BASE_URL + '/Images/commission_example_charactersheet2.jpg')}
                />
              </div>
            </Col>
            <Col md={7} className="d-flex align-items-center justify-content-center">
              <div className="text-center text-md-start">
                <p className="commission-details-2">
                  <span className="commission-price">200$</span> - CHARACTER SHEET
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Image Modal Overlay */}
      {selectedImage && (
        <div className="commission-image-overlay" onClick={closeModal}>
          <img src={selectedImage} alt="Commission example" />
        </div>
      )}
    </Container>
  );
}

export default Commissions;