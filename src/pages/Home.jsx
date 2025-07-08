import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Home() {
  return (
    <Container fluid className="p-0">
      <Image
        src={import.meta.env.BASE_URL + "/Images/vodnik_banner.jpg"} // Placeholder only, will change later
        className="profile-banner"
        alt="Banner"
      />
      <div className="banner-credit">BANNER: @AKIKO_OC</div>

      <div className="profile-section">
        <div className="profile-name-section">
          <h1 className="profile-name">Vodnik</h1>
          <div className="social-icons">
            <a href="https://twitter.com/19Vodnik" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/19VODNIK/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/19vodnik?utm_source=ig_web_button_share_sheet&igsh=MXRiNnh2N3h0Y2NhaQ==" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <p className="profile-handle">@19Vodnik</p>
        <p className="profile-desc">Catgirl Drawins + Neco arc enjoyer</p>
      </div>

      <div className="divider"></div>
      <h1 className="social-name">SOCIALS</h1>
      <Container className="social-section">
        <div className="social-grid">
          <div className="social-item">
            <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
              <div className="social-card twitter-card">
                <div className="social-image">
                  <Image src={import.meta.env.BASE_URL + "/Images/vodnik_logo.jpg"} alt="Twitter" />
                </div>
                <div className="social-content">
                  <h3>FOLLOW ME ON TWITTER</h3>
                  <div className="twitter-icon">Twitter</div>
                </div>
              </div>
            </a>
          </div>
          
          <div className="social-item">
            <a href="https://ko-fi.com/your_kofi" target="_blank" rel="noopener noreferrer">
              <div className="social-card kofi-card">
                <div className="social-image">
                  <Image src={import.meta.env.BASE_URL + "/Images/vodnik_kofi.jpg"} alt="Ko-fi" />
                </div>
                <div className="social-content">
                  <h3>SUPPORT ME THROUGH</h3>
                  <div className="kofi-logo">Ko-fi</div>
                </div>
              </div>
            </a>
          </div>

          <div className="social-item">
            <a href="https://www.redbubble.com/people/19Vodnik/shop?asc=u&ref=account-nav-dropdown" target="_blank" rel="noopener noreferrer">
              <div className="social-card alt-card">
                <div className="social-image">
                  <Image src={import.meta.env.BASE_URL + "/Images/redbubble_art.jpg"} alt="Ko-fi" />
                </div>
                <div className="social-content">
                  <h3>BUY STICKERS!</h3>
                  <div className="redbubble-logo">RedBubble</div>
                </div>
              </div>
            </a>
          </div>

          <div className="social-item">
            <a href="https://x.com/vdnk_lab" target="_blank" rel="noopener noreferrer">
              <div className="social-card twitter-card">
                <div className="social-image">
                  <Image src={import.meta.env.BASE_URL + "/Images/vodnik_alt.jpg"} alt="Ko-fi" />
                </div>
                <div className="social-content">
                  <h3> For RKGK, studies, model kits, random BS + NSFW🔞</h3>
                  <div className="twitter-icon">Twitter ALT</div>
                </div>
              </div>
            </a>
          </div>

        </div>
      </Container>
    </Container>
  );
}

export default Home;
