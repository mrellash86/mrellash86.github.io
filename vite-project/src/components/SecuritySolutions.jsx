import React from 'react';

const SecuritySolutions = ({ onBack }) => {
  return (
    <div className="service-page">
      <div className="service-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i> Back to Resume
        </button>
        <div className="service-title">
          <i className="fas fa-shield-alt"></i>
          <h1>Security Solutions</h1>
        </div>
      </div>

      <div className="service-content">
        <div className="overview-section">
          <h2>Military-Grade Security for Modern Business</h2>
          <p className="service-description">
            With 8 years of military experience handling classified systems and 4+ years in enterprise IT security, 
            I bring unparalleled expertise in protecting your digital assets against evolving cyber threats.
          </p>
        </div>

        <div className="skills-mapping">
          <div className="skill-category">
            <h3><i className="fas fa-user-shield"></i> Military Security Background</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Classified Systems Management:</strong> 8 years protecting sensitive military data and communications
              </div>
              <div className="skill-item">
                <strong>Security Clearance Experience:</strong> Understanding of strict security protocols and compliance
              </div>
              <div className="skill-item">
                <strong>Risk Assessment:</strong> Trained in identifying and mitigating security vulnerabilities
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-network-wired"></i> Network Security</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>CompTIA Network+:</strong> Certified in network security protocols and implementation
              </div>
              <div className="skill-item">
                <strong>Firewall Management:</strong> Configuration and maintenance of enterprise security perimeters
              </div>
              <div className="skill-item">
                <strong>Intrusion Detection:</strong> Monitoring systems for unauthorized access and threats
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-cloud-lock"></i> Cloud Security</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>AWS Security:</strong> Cloud Practitioner knowledge of AWS security services and best practices
              </div>
              <div className="skill-item">
                <strong>Data Encryption:</strong> Implementing encryption at rest and in transit
              </div>
              <div className="skill-item">
                <strong>Identity Management:</strong> IAM policies and access control implementation
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-code-branch"></i> Application Security</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Secure Development:</strong> Security-first approach to full-stack application development
              </div>
              <div className="skill-item">
                <strong>Vulnerability Assessment:</strong> Code review and penetration testing methodologies
              </div>
              <div className="skill-item">
                <strong>Compliance Frameworks:</strong> NIST, ISO 27001, and military security standards
              </div>
            </div>
          </div>
        </div>

        <div className="service-offerings">
          <h2>Security Services Portfolio</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <i className="fas fa-search"></i>
              <h4>Security Assessment</h4>
              <p>Comprehensive evaluation of your current security posture and vulnerabilities</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-shield-check"></i>
              <h4>Infrastructure Hardening</h4>
              <p>Military-grade security implementation for servers, networks, and endpoints</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-eye"></i>
              <h4>Security Monitoring</h4>
              <p>24/7 threat detection and incident response systems</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-graduation-cap"></i>
              <h4>Security Training</h4>
              <p>Employee awareness and best practices training programs</p>
            </div>
          </div>
        </div>

        <div className="threat-landscape">
          <h2>Current Threat Landscape</h2>
          <div className="threats-grid">
            <div className="threat-item">
              <i className="fas fa-virus"></i>
              <div>
                <h4>Ransomware Attacks</h4>
                <p>95% increase in ransomware targeting businesses</p>
              </div>
            </div>
            <div className="threat-item">
              <i className="fas fa-user-secret"></i>
              <div>
                <h4>Social Engineering</h4>
                <p>Human factor remains the weakest security link</p>
              </div>
            </div>
            <div className="threat-item">
              <i className="fas fa-cloud-rain"></i>
              <div>
                <h4>Cloud Vulnerabilities</h4>
                <p>Misconfigured cloud services expose sensitive data</p>
              </div>
            </div>
            <div className="threat-item">
              <i className="fas fa-mobile-alt"></i>
              <div>
                <h4>Mobile Security</h4>
                <p>Remote work increases attack surface area</p>
              </div>
            </div>
          </div>
        </div>

        <div className="security-framework">
          <h2>Defense-in-Depth Strategy</h2>
          <div className="framework-layers">
            <div className="layer">
              <i className="fas fa-building"></i>
              <span>Physical Security</span>
            </div>
            <div className="layer">
              <i className="fas fa-network-wired"></i>
              <span>Network Security</span>
            </div>
            <div className="layer">
              <i className="fas fa-server"></i>
              <span>Host Protection</span>
            </div>
            <div className="layer">
              <i className="fas fa-database"></i>
              <span>Data Security</span>
            </div>
            <div className="layer">
              <i className="fas fa-users"></i>
              <span>User Training</span>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Secure Your Business Today</h3>
          <p>Don't wait for a breach - implement military-grade security now</p>
          <button className="cta-btn" onClick={() => window.location.href = 'mailto:ellash.np@outlook.com?subject=Security Solutions Consultation'}>
            <i className="fas fa-envelope"></i>
            Get Security Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecuritySolutions;
