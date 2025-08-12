import React from 'react';

const CloudArchitecture = ({ onBack }) => {
  return (
    <div className="service-page">
      <div className="service-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i> Back to Resume
        </button>
        <div className="service-title">
          <i className="fas fa-cloud"></i>
          <h1>Cloud Architecture</h1>
        </div>
      </div>

      <div className="service-content">
        <div className="overview-section">
          <h2>How My Experience Applies</h2>
          <p className="service-description">
            With my comprehensive background in IT operations, military systems, and AWS cloud technologies, 
            I bring a unique perspective to cloud architecture that combines security, scalability, and operational excellence.
          </p>
        </div>

        <div className="skills-mapping">
          <div className="skill-category">
            <h3><i className="fab fa-aws"></i> AWS Cloud Expertise</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>AWS Cloud Practitioner Certified:</strong> Foundation knowledge in cloud concepts, security, and compliance
              </div>
              <div className="skill-item">
                <strong>Cloud Migration:</strong> Experience transitioning legacy systems to cloud-native architectures
              </div>
              <div className="skill-item">
                <strong>Cost Optimization:</strong> Designing efficient, cost-effective cloud solutions
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-server"></i> Infrastructure & Operations</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Systems Integration:</strong> 4+ years managing complex IT infrastructure at Enterprise level
              </div>
              <div className="skill-item">
                <strong>Network Architecture:</strong> CompTIA Network+ certified with hands-on experience in enterprise networking
              </div>
              <div className="skill-item">
                <strong>Security Implementation:</strong> Military-grade security protocols and compliance frameworks
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-code"></i> Technical Implementation</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Python Automation:</strong> PCEP certified for infrastructure automation and monitoring
              </div>
              <div className="skill-item">
                <strong>Full-Stack Development:</strong> React, Node.js, and database management for complete solutions
              </div>
              <div className="skill-item">
                <strong>DevOps Practices:</strong> CI/CD pipelines and infrastructure as code implementation
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-shield-alt"></i> Military & Security Background</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>High-Security Environments:</strong> 8 years in U.S. Army managing mission-critical systems
              </div>
              <div className="skill-item">
                <strong>Disaster Recovery:</strong> Emergency response and system recovery protocols
              </div>
              <div className="skill-item">
                <strong>Compliance & Governance:</strong> Experience with strict regulatory requirements
              </div>
            </div>
          </div>
        </div>

        <div className="service-offerings">
          <h2>Cloud Architecture Services</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <i className="fas fa-sitemap"></i>
              <h4>Solution Design</h4>
              <p>Custom cloud architectures tailored to your business needs and growth plans</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-sync-alt"></i>
              <h4>Migration Strategy</h4>
              <p>Seamless transition from on-premise to cloud with minimal downtime</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-chart-line"></i>
              <h4>Scalability Planning</h4>
              <p>Auto-scaling solutions that grow with your business demands</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-lock"></i>
              <h4>Security Integration</h4>
              <p>Military-grade security protocols embedded in cloud infrastructure</p>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Ready to Modernize Your Infrastructure?</h3>
          <p>Let's discuss how cloud architecture can transform your business operations</p>
          <button className="cta-btn" onClick={() => window.location.href = 'mailto:ellash.np@outlook.com?subject=Cloud Architecture Consultation'}>
            <i className="fas fa-envelope"></i>
            Start Your Cloud Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloudArchitecture;
