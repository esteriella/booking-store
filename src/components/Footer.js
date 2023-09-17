import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a booking web application that connects users with service providers.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Booking Web Application. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
