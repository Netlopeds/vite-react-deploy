import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useEffect, useState } from 'react';

function Contact(){
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/Images/contact1.jpg",
    "/Images/contact2.jpg",
    "/Images/contact3.jpg"
  ];

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleOverlayClick = () => {
    setSelectedImage(null);
  };

  return (
    <Container fluid className="p-0">
      <div className="profile-section">
        <h1 className="contact-title">CONTACT ME</h1>
        <div className="contact-info">
          <p className="contact-text">
            DM me on Twitter <a href="https://twitter.com/19Vodnik" target="_blank" rel="noopener noreferrer" className="contact-link">@19Vodnik</a> or Email me! <a href="mailto:19Vdnk@gmail.com" className="contact-link">19Vdnk@gmail.com</a>
          </p>
        </div>
        
        <div className="contact-gallery">
          <Row className="g-4">
            {images.map((src, index) => (
              <Col md={4} key={index}>
                <div className="contact-image-container" onClick={() => handleImageClick(src)}>
                  <Image 
                    src={import.meta.env.BASE_URL + src} 
                    alt={`Contact Art ${index + 1}`} 
                    className="contact-image"
                    fluid
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {selectedImage && (
        <div 
          className="contact-image-hover-overlay visible"
          onClick={handleOverlayClick}
        >
          <Image 
            src={import.meta.env.BASE_URL + selectedImage} 
            alt="Full Size" 
            fluid
            onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking on the image itself
          />
        </div>
      )}
    </Container>
  );
}

export default Contact;