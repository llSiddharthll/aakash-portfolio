import React from "react";
import { Parallax } from "react-parallax";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const image1 = "./img/background/2.jpg";

function Mblockquote() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="section bg-top bg-bottom py-0">
      <Parallax className="pb-5" bgImage={image1} strength={300}>
        <div
          className="py-5 position-relative"
          data-aos="fade"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10 offset-md-1">
                <div className="spacer-double"></div>
                <blockquote className="q-big">
                  <i className="d-big icon_quotations"></i>
                  Specializing in SEO and Google Ads, I help businesses grow by boosting visibility, driving quality traffic, and turning visitors into loyal customers through strategic and result-oriented marketing.
                  <span className="d-quote-by">Aakash</span>
                </blockquote>
                <div className="spacer-double"></div>
                <div className="spacer-double"></div>
                <div className="spacer-single"></div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default Mblockquote;
