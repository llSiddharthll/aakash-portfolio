import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Whatido() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-12 text-center"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <h2>What I Do</h2>
          <div className="space-border"></div>
        </div>
      </div>
      <div className="spacer-single"></div>
      <div className="row">
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <i className="icon_genius id-color-2"></i>
              <div className="text">
                <h3>Search Engine Optimization (SEO)</h3>
                I improve website rankings and visibility through smart backlink strategies, keyword targeting, and ethical SEO practices that bring in long-term, organic traffic.
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <i className="icon_tools id-color-2"></i>
              <div className="text">
                <h3>Google Ads (PPC Marketing)</h3>
                I run highly targeted Google Ads campaigns that drive real results—more clicks, better leads, and improved ROI with data-driven keyword and budget strategies.
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <i className="icon_camera_alt id-color-2"></i>
              <div className="text">
                <h3>Performance Tracking & Optimization</h3>
                Using tools like Google Analytics & Search Console, I track traffic, rankings, and conversions—then fine-tune campaigns for continuous improvement and maximum impact.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatido;
