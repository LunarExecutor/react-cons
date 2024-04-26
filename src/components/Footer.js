

const Footer = () => {
    return <footer className="footer">
    <div className="footer__container container">
      <h1 className="footer__title">Zenith<span>.</span>Consultants</h1>
      <p className="footer__description">
      The Ideal Workplace for Maximum<br />
      Construction Productivity.
      </p>

      <div className="footer__content grid">
        <div className="footer__data">
          <h2 className="footer__subtitle">Address</h2>
          <p className="footer__information">
          3111 Camino Del Rio N, Suite 421 <br />
          San Diego, CA 92108
          </p>
        </div>
        <div className="footer__data">
          <h2 className="footer__subtitle">Contact Info</h2>
          <p className="footer__information">
            (619) 867 1724 <br />
            info@ZenithConsultants.com
          </p>
        </div>
        <div className="footer__data">
          <h2 className="footer__subtitle">Office</h2>
          <p className="footer__information">
            Monday - Friday <br />
            9AM - 6PM
          </p>
        </div>
        <div className="footer__data">
          <p className="footer__newsletter-description">
            Subscribe to our newsletter
          </p>

          <div className="footer__newsletter">
            <input
              type="email"
              placeholder="Your email address"
              className="footer__input"
            />
            <button className="footer__button">
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="footer__group">
        <ul className="footer__social">
          <a href="#Facebook" target="_blank" className="footer__social-link">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#Instagram" target="_blank" className="footer__social-link">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#tiktok" target="_blank" className="footer__social-link">
            <i className="bx bxl-tiktok"></i>
          </a>
        </ul>

        <span className="footer__copy"> &#169; ZenithConsultants. All rigths reserved </span>
      </div>
    </div>
  </footer>
}

export default Footer;