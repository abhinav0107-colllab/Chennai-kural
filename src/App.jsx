
import { useState } from "react";
import "./App.css";

const services = [
  { icon: "💧", title: "Water Supply", desc: "Water cuts, leakage and water quality issues", color: "blue" },
  { icon: "🛣️", title: "Roads & Footpaths", desc: "Potholes, damaged roads and footpaths", color: "slate" },
  { icon: "🗑️", title: "Garbage & Sanitation", desc: "Waste collection and cleanliness issues", color: "green" },
  { icon: "💡", title: "Street Lights", desc: "Broken or non-functional street lights", color: "amber" },
  { icon: "🏢", title: "Drainage & Sewerage", desc: "Blocked drains, overflow and sewage", color: "purple" },
  { icon: "🌳", title: "Parks & Public Spaces", desc: "Park maintenance and public spaces", color: "mint" },
];

const steps = [
  { icon: "📝", title: "Register", desc: "Submit your complaint and location." },
  { icon: "🧭", title: "Auto-Route", desc: "Identify the right department and ward." },
  { icon: "🔎", title: "Track", desc: "Follow status updates in one place." },
  { icon: "✓", title: "Get Resolved", desc: "Review the outcome and give feedback." },
];

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [category, setCategory] = useState("Water Supply");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [trackId, setTrackId] = useState("");
  const [submittedId, setSubmittedId] = useState("");

  function submitDemoComplaint(event) {
    event.preventDefault();
    const id = `CK-${Date.now().toString().slice(-6)}`;
    setSubmittedId(id);
  }

  function closeModal() {
    setActiveModal("");
    setSubmittedId("");
  }

  return (
    <div className="site-shell" id="home">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>A Civic-Tech Initiative <b>•</b> Demo Prototype (Unofficial)</span>
          <span>⌖ Chennai, Tamil Nadu <b>•</b> English | தமிழ்</span>
        </div>
      </div>

      <header className="main-header">
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Chennai Kural home">
            <span className="brand-mark">⌂</span>
            <span>
              <strong>Chennai <em>Kural</em></strong>
              <small>Your Voice. A Better Chennai.</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a className="selected" href="#home">Home</a>
            <a href="#services">Services</a>
            <button onClick={() => setActiveModal("register")}>Register Complaint</button>
            <button onClick={() => setActiveModal("track")}>Track Complaint</button>
            <a href="#how-it-works">How It Works</a>
          </nav>

          <button className="login-button" onClick={() => setActiveModal("login")}>
            Login
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-photo" aria-hidden="true" />
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span>✦</span> REPORT. TRACK. GET IT RESOLVED.</div>
              <h1>A Cleaner, Safer,<br />Better <span>Chennai.</span></h1>
              <p>
                Your city, your voice. Report civic issues, track progress,
                and help complaints reach the right department.
              </p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => setActiveModal("register")}>
                  ＋ Register a Complaint <span>→</span>
                </button>
                <button className="button button-light" onClick={() => setActiveModal("track")}>
                  ⌕ Track Complaint <span>→</span>
                </button>
              </div>
              <div className="hero-points">
                <span>✓ Easy reporting</span>
                <span>✓ Smart routing demo</span>
                <span>✓ Status tracking</span>
              </div>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <p>Your voice matters.<br /><strong>Let’s improve Chennai together.</strong></p>
              <small>COMMUNITY FIRST · CITY FOR ALL</small>
            </div>
          </div>
          <div className="container stats-wrap">
            <div className="stats-card">
              <div className="stats-intro"><span>ⓘ</span><div><strong>Chennai in numbers</strong><small>Illustrative demo data only</small></div></div>
              <div className="stat"><strong>1,240+</strong><small>Complaints registered</small></div>
              <div className="stat"><strong>860+</strong><small>Resolved</small></div>
              <div className="stat"><strong>320+</strong><small>In progress</small></div>
              <div className="stat"><strong>25+</strong><small>Departments</small></div>
            </div>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">HOW CAN WE HELP?</span>
                <h2>Common <span>Services</span></h2>
                <p>Choose a category to start reporting an issue in your area.</p>
              </div>
              <button className="text-link" onClick={() => setActiveModal("register")}>View all services <span>→</span></button>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <button
                  className="service-card"
                  key={service.title}
                  onClick={() => {
                    setCategory(service.title);
                    setActiveModal("register");
                  }}
                >
                  <span className={`service-icon ${service.color}`}>{service.icon}</span>
                  <span className="service-arrow">↗</span>
                  <strong>{service.title}</strong>
                  <small>{service.desc}</small>
                  <span className="card-link">Report an issue →</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="workflow-section section-pad" id="how-it-works">
          <div className="container">
            <div className="section-heading workflow-heading">
              <div>
                <span className="section-kicker">SIMPLE. TRANSPARENT. ACCOUNTABLE.</span>
                <h2>How It <span>Works</span></h2>
                <p>From complaint to resolution in four simple steps.</p>
              </div>
            </div>
            <div className="steps-grid">
              {steps.map((step, index) => (
                <div className="step-card" key={step.title}>
                  <div className="step-icon"><span>{step.icon}</span><i>{index + 1}</i></div>
                  <div><strong>{step.title}</strong><p>{step.desc}</p></div>
                  {index < steps.length - 1 && <span className="step-arrow">→</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-cta">
          <div className="container bottom-cta-inner">
            <div><span className="section-kicker">YOUR CITY. YOUR VOICE.</span><h2>See an issue? Help make it better.</h2><p>Start with a simple report. Every improvement begins with being heard.</p></div>
            <button className="button button-primary" onClick={() => setActiveModal("register")}>Report an Issue →</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div><strong>Chennai Kural</strong><p>Your Voice. A Better Chennai.</p></div>
          <span>Hackathon prototype · Not an official government portal</span>
        </div>
      </footer>

      {activeModal && (
        <div className="modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>

            {activeModal === "register" && (
              submittedId ? (
                <div className="success-state">
                  <span className="success-icon">✓</span>
                  <h2 id="modal-title">Demo complaint created</h2>
                  <p>Your sample reference ID is:</p>
                  <strong className="reference-id">{submittedId}</strong>
                  <p className="demo-warning">This is a frontend demo only. Your complaint has not been sent to a government department or saved to a server.</p>
                  <button className="button button-primary full-button" onClick={closeModal}>Done</button>
                </div>
              ) : (
                <form onSubmit={submitDemoComplaint}>
                  <span className="section-kicker">CITIZEN SERVICES</span>
                  <h2 id="modal-title">Register a Complaint</h2>
                  <p className="modal-description">Enter a few details to preview the complaint flow.</p>
                  <label>Service category
                    <select value={category} onChange={(event) => setCategory(event.target.value)}>
                      {services.map((item) => <option key={item.title}>{item.title}</option>)}
                    </select>
                  </label>
                  <label>Issue description
                    <textarea required minLength={8} value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Describe the issue you noticed..." />
                  </label>
                  <label>Area / location
                    <input required value={location} onChange={(event) => setLocation(event.target.value)} placeholder="e.g. T. Nagar, Chennai" />
                  </label>
                  <button className="button button-primary full-button" type="submit">Create Demo Complaint →</button>
                  <small className="form-note">Prototype only — no real complaint is submitted.</small>
                </form>
              )
            )}

            {activeModal === "track" && (
              <div>
                <span className="section-kicker">COMPLAINT STATUS</span>
                <h2 id="modal-title">Track a Complaint</h2>
                <p className="modal-description">Enter a demo reference ID to preview tracking.</p>
                <form onSubmit={(event) => { event.preventDefault(); setSubmittedId(trackId.trim()); }}>
                  <label>Complaint reference ID
                    <input required value={trackId} onChange={(event) => setTrackId(event.target.value)} placeholder="e.g. CK-123456" />
                  </label>
                  <button className="button button-primary full-button" type="submit">Check Status →</button>
                </form>
                {submittedId && <div className="tracking-result"><strong>{submittedId}</strong><span className="status-pill">Demo status: Assigned</span><p>This is sample tracking information. Connect the backend to retrieve real project records.</p></div>}
              </div>
            )}

            {activeModal === "login" && (
              <div>
                <span className="section-kicker">WELCOME BACK</span>
                <h2 id="modal-title">Citizen Login</h2>
                <p className="modal-description">Authentication will be connected in a later integration step.</p>
                <label>Email or phone number<input placeholder="Enter email or phone" /></label>
                <button className="button button-primary full-button" onClick={() => alert("Login is a UI preview. Authentication is not connected yet.")}>Continue</button>
                <small className="form-note">Demo interface only. No credentials are collected.</small>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
