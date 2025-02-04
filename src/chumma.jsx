import React from "react";
import knosis from "../src/Asserts/KNOSIS.png";
import cruz from "../src/Asserts/Dr Cruz.png";
import airway from "../src/Asserts/Airway.png";
import conspire from "../src/Asserts/conspire logo.png";
import CapnoTrainer from "../src/Asserts/Capnotrainer .png";
import frame1 from "../src/Asserts/Frame1.png";
import frame2 from "../src/Asserts/Frame2.png";
import frame3 from "../src/Asserts/Frame3 .png";
import frame4 from "../src/Asserts/Frame4.png";
import header from "../src/Asserts/Header.png";
import gym from "../src/Asserts/gym.png";

const WebPage = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="olus">
        <div className="container">
          {/* Logo */}
          <div className="text-center my-3">
            <img src={header} alt="Header Logo" className="img-fluid" />
          </div>

          {/* Main Content */}
          <div className="row align-items-center text-white">
            {/* Left Column - Text Content */}
            <div className="col-12 col-lg-6 mt-4">
              <h2 className="fw-bold text-center text-lg-start">
                Transform Your Life with the Revolutionary CapnoTrainer® GO
              </h2>
              <h3 className="fw-bold text-center mt-4 text-lg-start">
                Breathe Smarter, Live Better
              </h3>
              <p className="text-center text-lg-start px-3 px-lg-0">
                Breathing is more than just an unconscious action—it’s a foundation of
                health, performance, and emotional well-being. But what if your breathing
                habits are silently holding you back? Enter the CapnoTrainer® GO, the
                groundbreaking tool that merges science, psychology, and technology to
                revolutionize your breathing habits and transform your life.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="col-12 col-lg-6 d-flex justify-content-center">
              <img
                src={CapnoTrainer}
                alt="CapnoTrainer Device"
                className="img-fluid rounded"
                style={{
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Section - Logos */}
      <main>
        <div className="container py-5">
          <div className="row justify-content-center align-items-center g-4">
            {[knosis, cruz, airway, conspire].map((image, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
                <img
                  src={image}
                  alt={`Logo ${index + 1}`}
                  className="img-fluid rounded"
                  style={{ maxHeight: "150px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Aside Section - Frame 1 */}
      <aside>
        <div className="container text-center mt-4">
          <img src={frame1} alt="Frame 1" className="img-fluid rounded" />
        </div>
      </aside>

      {/* Article Section - Frame 2 */}
      <article>
        <div className="container text-center mt-5 mb-3">
          <img src={frame2} alt="Frame 2" className="img-fluid rounded" />
        </div>
      </article>

      {/* Asides Section - Frame 3 & 4 */}
      <section>
        <div className="container text-center mt-4">
          <div className="row justify-content-center g-3">
            {[frame3, frame4].map((frame, index) => (
              <div key={index} className="col-12 col-md-6 d-flex justify-content-center">
                <img src={frame} alt={`Frame ${index + 3}`} className="img-fluid rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Aside Section - Frame 5 */}
      <div>
        <div>
          <img src={gym}/>
        </div>
      </div>
    </div>
  );
};

export default WebPage;
