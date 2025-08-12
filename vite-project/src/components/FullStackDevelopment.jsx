import React from 'react';

const FullStackDevelopment = ({ onBack }) => {
  return (
    <div className="service-page">
      <div className="service-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i> Back to Resume
        </button>
        <div className="service-title">
          <i className="fas fa-laptop-code"></i>
          <h1>Full-Stack Development</h1>
        </div>
      </div>

      <div className="service-content">
        <div className="overview-section">
          <h2>End-to-End Application Development</h2>
          <p className="service-description">
            Combining my technical expertise in modern web technologies with military precision and enterprise experience, 
            I deliver robust, scalable applications that meet both user needs and business objectives.
          </p>
        </div>

        <div className="skills-mapping">
          <div className="skill-category">
            <h3><i className="fab fa-js-square"></i> Frontend Technologies</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>React Development:</strong> Modern component-based architecture with hooks and state management
              </div>
              <div className="skill-item">
                <strong>Responsive Design:</strong> Mobile-first approach ensuring seamless user experience across devices
              </div>
              <div className="skill-item">
                <strong>Modern CSS:</strong> Advanced styling with Flexbox, Grid, animations, and CSS-in-JS solutions
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-server"></i> Backend Development</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Node.js & Express:</strong> Scalable server-side applications with RESTful API design
              </div>
              <div className="skill-item">
                <strong>Python Development:</strong> PCEP certified with Django/Flask for web applications and automation
              </div>
              <div className="skill-item">
                <strong>Database Management:</strong> SQL and NoSQL databases with optimization and security best practices
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-cloud"></i> Cloud Integration</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>AWS Services:</strong> Cloud Practitioner certified with hands-on experience in deployment
              </div>
              <div className="skill-item">
                <strong>Serverless Architecture:</strong> Cost-effective solutions using Lambda and microservices
              </div>
              <div className="skill-item">
                <strong>API Gateway:</strong> Secure, scalable API management and integration
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-cogs"></i> DevOps Integration</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>CI/CD Pipelines:</strong> Automated testing, building, and deployment processes
              </div>
              <div className="skill-item">
                <strong>Containerization:</strong> Docker and container orchestration for consistent deployments
              </div>
              <div className="skill-item">
                <strong>Monitoring & Logging:</strong> Application performance monitoring and error tracking
              </div>
            </div>
          </div>
        </div>

        <div className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h4><i className="fas fa-desktop"></i> Frontend</h4>
              <div className="tech-items">
                <span className="tech-item">React</span>
                <span className="tech-item">JavaScript ES6+</span>
                <span className="tech-item">HTML5/CSS3</span>
                <span className="tech-item">Vite</span>
                <span className="tech-item">Responsive Design</span>
              </div>
            </div>
            <div className="tech-category">
              <h4><i className="fas fa-database"></i> Backend</h4>
              <div className="tech-items">
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">Express.js</span>
                <span className="tech-item">Django/Flask</span>
                <span className="tech-item">RESTful APIs</span>
              </div>
            </div>
            <div className="tech-category">
              <h4><i className="fas fa-hdd"></i> Database</h4>
              <div className="tech-items">
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">MySQL</span>
                <span className="tech-item">Redis</span>
                <span className="tech-item">DynamoDB</span>
              </div>
            </div>
            <div className="tech-category">
              <h4><i className="fas fa-cloud"></i> Cloud & DevOps</h4>
              <div className="tech-items">
                <span className="tech-item">AWS</span>
                <span className="tech-item">Docker</span>
                <span className="tech-item">CI/CD</span>
                <span className="tech-item">Git</span>
                <span className="tech-item">Linux</span>
              </div>
            </div>
          </div>
        </div>

        <div className="service-offerings">
          <h2>Development Services</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <i className="fas fa-globe"></i>
              <h4>Web Applications</h4>
              <p>Modern, responsive web applications with optimal performance and user experience</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-mobile-alt"></i>
              <h4>Progressive Web Apps</h4>
              <p>Mobile-first applications that work seamlessly across all devices and platforms</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-plug"></i>
              <h4>API Development</h4>
              <p>Robust, secure APIs for seamless integration and data exchange</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-rocket"></i>
              <h4>MVP Development</h4>
              <p>Rapid prototyping and minimum viable products to validate your ideas</p>
            </div>
          </div>
        </div>

        <div className="development-process">
          <h2>Development Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Requirements Analysis</h4>
                <p>Understanding your business needs and technical requirements</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Architecture Design</h4>
                <p>Planning scalable, maintainable system architecture</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Agile Development</h4>
                <p>Iterative development with regular feedback and updates</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Testing & Deployment</h4>
                <p>Comprehensive testing and automated deployment pipelines</p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-types">
          <h2>Project Examples</h2>
          <div className="project-cards">
            <div className="project-card">
              <i className="fas fa-shopping-cart"></i>
              <h4>E-Commerce Platforms</h4>
              <p>Full-featured online stores with payment processing, inventory management, and analytics</p>
            </div>
            <div className="project-card">
              <i className="fas fa-chart-dashboard"></i>
              <h4>Business Dashboards</h4>
              <p>Data visualization and business intelligence applications for informed decision-making</p>
            </div>
            <div className="project-card">
              <i className="fas fa-users"></i>
              <h4>SaaS Applications</h4>
              <p>Multi-tenant software solutions with subscription management and user authentication</p>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Ready to Build Your Application?</h3>
          <p>Let's turn your ideas into powerful, scalable web applications</p>
          <button className="cta-btn" onClick={() => window.location.href = 'mailto:ellash.np@outlook.com?subject=Full-Stack Development Consultation'}>
            <i className="fas fa-envelope"></i>
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullStackDevelopment;
