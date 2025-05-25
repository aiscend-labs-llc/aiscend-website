// Basic landing page for Prism AI Solutions
// This is a temporary implementation that will be replaced with a more comprehensive site
import prismLogo from './assets/prism-logo.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      {/* Header Section - Contains logo and navigation */}
      <header>
        <div className="logo-container">
          <img src={prismLogo} className="logo" alt="Prism AI Solutions Logo" />
          <h1>Prism AI Solutions</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section - Main headline and tagline */}
        <section className="hero">
          <h2>Transforming Business Through Intelligent Solutions</h2>
          <p>Your partner for innovative AI & technology solutions</p>
        </section>

        {/* Services Section - List of services offered */}
        <section id="services" className="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {/* Service Cards - Add or modify services as needed */}
            <div className="service-card">
              <h3>AI & Automation</h3>
              <p>Custom AI solutions to streamline your operations and enhance decision-making.</p>
            </div>
            <div className="service-card">
              <h3>Data Science</h3>
              <p>Transform your data into actionable insights with our expert analysis.</p>
            </div>
            <div className="service-card">
              <h3>Web Services</h3>
              <p>Robust web applications and services tailored to your business needs.</p>
            </div>
            <div className="service-card">
              <h3>IoT</h3>
              <p>Connect your physical and digital worlds with smart IoT solutions.</p>
            </div>
          </div>
        </section>

        {/* Contact Section - Company contact information */}
        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Phone</h3>
              <p>631 800 1040</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:hello@prismtech.ai">hello@prismtech.ai</a></p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2025 Prism AI Solutions. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
