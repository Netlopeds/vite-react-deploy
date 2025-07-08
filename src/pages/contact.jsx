import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Contact(){
 return (
   <Container fluid className="p-0">
     <div className="profile-section">
       <h1 className="profile-name">Contact</h1>
       <p className="profile-desc">Get in touch with me for commissions, collaborations, or just to say hi!</p>
       
       <div className="divider"></div>
       
       <div style={{ padding: '40px 0' }}>
         <h3 style={{ color: '#0087a5', marginBottom: '20px' }}>Reach out to me:</h3>
         <ul style={{ fontSize: '18px', lineHeight: '1.8' }}>
           <li>Email: contact@vodnik.com</li>
           <li>Twitter: <a href="https://twitter.com/19Vodnik" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2' }}>@19Vodnik</a></li>
           <li>Instagram: <a href="https://www.instagram.com/19vodnik" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F' }}>@19vodnik</a></li>
         </ul>
       </div>
     </div>
   </Container>
 );
}

export default Contact;