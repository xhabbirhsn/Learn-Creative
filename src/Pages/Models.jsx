import Pexel1 from "../images/course-img/pexel1.jpg"
import Pexel2 from "../images/course-img/pexel2.jpg"
import Pexel3 from "../images/course-img/pexel3.jpg"
import Pexel4 from "../images/course-img/pexel4.jpg"
import Pexel5 from "../images/course-img/pexel5.jpg"
import Pexel6 from "../images/course-img/pexel6.jpg"

import { Link } from "react-router-dom";

function Models() {
  return (
    <>
      <section className="models-section">
        <div className="container">
          <div className="models-div">
            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={Pexel2} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>YouTube for Beginners - How to Start & Grow Your YouTube Channel</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <p>Bestseller</p>
                    </span>
                    <span style={{ textAlign: "right" }}>
                      <h4>₹199</h4>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={Pexel3} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Art Therapy with Gouache: No Sketch Vibrant Sunsets for Beginners</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <p>Bestseller</p>
                    </span>
                    <span style={{ textAlign: "right" }}>
                      <h4>₹199</h4>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={Pexel4} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Advanced Video Editing with Adobe Premiere Pro</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <p>Bestseller</p>
                    </span>
                    <span style={{ textAlign: "right" }}>
                      <h4>₹199</h4>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={Pexel5} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Photography for Instagram: Capture and Share Your Life</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <p>Bestseller</p>
                    </span>
                    <span style={{ textAlign: "right" }}>
                      <h4>₹199</h4>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={Pexel6} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Grow Your Streams: How to Grow Your Streams on Spotify Organically</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <p>Bestseller</p>
                    </span>
                    <span style={{ textAlign: "right" }}>
                      <h4>₹199</h4>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="models-div__box">
              <div className="models-div__box__img">
                <img src={Pexel1} alt="car_img" />
                <div className="models-div__box__descr">
                  <div className="models-div__box__descr__name-price">
                    <div className="models-div__box__descr__name-price__name">
                      <p>Productivity Masterclass - Principles and Tools to Boost Your Productivity</p>
                    </div>
                  </div>
                  <div className="models-div__box__descr__name-price__details">
                    <span>
                      <p>Bestseller</p>
                    </span>
                    <span style={{ textAlign: "right" }}>
                      <h4>₹199</h4>
                    </span>
                  </div>
                  <div className="models-div__box__descr__name-price__btn">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a class by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(+91) 012345789</h3>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Models;
