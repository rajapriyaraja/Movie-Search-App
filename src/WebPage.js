import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import frame6 from "../src/Asserts/Frame 163.png";
import frame7 from "../src/Asserts/Frame 168 .png";
import frame10 from "../src/Asserts/Frame 175.png";
import frame8 from "../src/Asserts/Frame 184.png";
import img1 from "../src/Asserts/Eliminate Stress and Anxiety 1.png";
import img2 from "../src/Asserts/Enhance Mental Clarity and Focus.png";
import img3 from "../src/Asserts/Achieve Peak Performance 1.png";
import img4 from "../src/Asserts/Improve Physical Health 1.png";
import logos from "../src/Asserts/Breathe matters Logo 3.png";
import frame27 from "../src/Asserts/Frame 27.png";
import frame193 from "../src/Asserts/Frame 193.png";
import frame120 from "../src/Asserts/Frame 188.png";
import './App.css';

const WebPage = () => {
  return (
    <div className="bdy">
      <nav className="olus">
        <div className="container">
          <div className="text-center my-3">
            <img src={header} alt="Header Logo" className="img-fluid" />
          </div>

          <div className="row align-items-center text-white">
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

      <main>
        <div className="container py-5">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
              <img
                src={knosis}
                alt="Knosis"
                className="img-fluid rounded"
                style={{ maxHeight: "150px", objectFit: "contain" }}
              />
            </div>

            <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
              <img
                src={cruz}
                alt="Cruz"
                className="img-fluid rounded"
                style={{ maxHeight: "150px", objectFit: "contain" }}
              />
            </div>

            <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
              <img
                src={airway}
                alt="Airway"
                className="img-fluid rounded"
                style={{ maxHeight: "150px", objectFit: "contain" }}
              />
            </div>

            <div className="col-6 col-sm-4 col-md-3 d-flex justify-content-center">
              <img
                src={conspire}
                alt="Conspire"
                className="img-fluid rounded"
                style={{ maxHeight: "150px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </main>

      <aside>
        <div className="container">
          <img className="img-fluid" src={frame1} />
        </div>
      </aside>

      <article>
        <div className="container mt-5 mb-3">
          <img src={frame2} className="img-fluid" />
        </div>
      </article>

      <asides>
        <div className="container-fluid">
          <img src={frame3} className="img-fluid" />
          <img src={frame4} className="img-fluid" />
        </div>
      </asides>

      <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 position-relative">
        <div className="position-relative">
          <img src={gym} className="container-fluid demn" />
          <img
            src={frame6}
            className="position-absolute d-lg-block d-none"
            style={{
              width: "600px",
              top: "280px",
              left: "200px",
            }}
          />
        </div>

        <div>
          <h2>What Makes the CapnoTrainer® go <br /> Different?</h2>
          <p>
            Unlike traditional breathing tools that focus on shallow techniques, the CapnoTrainer® GO goes deeper. It integrates
            <strong style={{ color: "#40A0A0" }}>
              psychophysiology, behavioral analysis, and cutting-edge technology
            </strong>
            to provide a complete understanding of your breath’s role in health and performance.
          </p>
        </div>
      </div>


      <div className="container mt-5 pt-5 mb-5">
        <img src={frame7} className="container-fluid" />
      </div>

      <div className="pt-3 container-fluid mb-5">
        <img src={frame10} className="mt-5"
          style={{
            width: "100%",
          }} />
      </div>

      <div className="container mb-5 pt-3">
        <img src={frame8} className="img-fluid" alt="Frame" />
      </div>
      <div className="pt-4">
        <h3 className="text-center mb-5">WHAT CAN THE CAPOTRAINER®GO DO FOR YOU</h3>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-6 col-lg-3 mt-1">
              <div className="card text-white" style={{ backgroundColor: "#008080" }}>
                <img className="card-img-top" src={img1} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Eliminate Stress and Anxiety</h5>
                  <p className="card-text">Learn to control overbreathing, reduce hypocapnia and maintain balance even in challenging situations.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-1">
              <div className="card text-white" style={{ backgroundColor: "#008080" }}>
                <img className="card-img-top" src={img2} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Eliminate Stress and Anxiety</h5>
                  <p className="card-text">Learn to control overbreathing, reduce hypocapnia and maintain balance even in challenging situations.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-1">
              <div className="card text-white" style={{ backgroundColor: "#008080" }}>
                <img className="card-img-top" src={img3} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Eliminate Stress and Anxiety</h5>
                  <p className="card-text">Learn to control overbreathing, reduce hypocapnia and maintain balance even in challenging situations.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-1">
              <div className="card text-white" style={{ backgroundColor: "#008080" }}>
                <img className="card-img-top" src={img4} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Eliminate Stress and Anxiety</h5>
                  <p className="card-text">Learn to control overbreathing, reduce hypocapnia and maintain balance even in challenging situations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="pb-5">
        <div className="container-fluid mt-5 pt-5 ">
          <img src={frame120} className="img-fluid" />
        </div>
      </div>

      <div class="container my-5">
        <h2 class="text-center fw-bold mb-4">FAQs</h2>
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
                style={{ color: "#309898" }}
              >
                Do I need prior experience with breathing exercises to use the CapnoTrainer® GO?
              </button>
            </h2>

          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" style={{ color: "#309898" }} type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                Is it safe to use for health conditions like asthma or anxiety?
              </button>
            </h2>
          </div>


          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" style={{ color: "#309898" }} type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                How do I get started?
              </button>
            </h2>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <img src={frame193} className="img-fluid" />
      </div>

      <div className="container pt-4">
        <div className="row justify-content-between">
          <div className="col-12 col-md-4 mb-4">
            <div className="d-flex flex-column align-items-center">
              <img src={logos} className="img-fluid mb-3" alt="Logo" />
              <p className="text-center">
                Join us on a journey towards a healthier, balanced life - where each inhale and exhale contributes to your overall sense of wellness.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h3 className="text-center">Contact</h3>
            <ul className="list-unstyled text-center">
              <li>Phone</li>
              <li>Email</li>
              <li>Location</li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h3 className="text-center">Stay in Touch</h3>
            <div className="text-center">
              <img src={frame27} className="img-fluid" alt="Stay in Touch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPage;

