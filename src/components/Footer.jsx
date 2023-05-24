function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>learnCreative</span>
              </li>
              <li>
              Unlock Your Creative Potential with LearnCreative: Where Imagination Meets Education!
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (+91) 0123456789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; learncreative@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">Help and Support</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Community</li>
              <li>
                <a href="#home">Team Plans</a>
              </li>
              <li>
                <a href="#home">Refer a Friend</a>
              </li>
              <li>
                <a href="#home">Free Classes</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Get Started For Free</li>
              <li>
                <p>Get started for free and unlock the full potential of our services.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
