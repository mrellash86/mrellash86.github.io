import React from 'react';

const DevOpsAutomation = ({ onBack }) => {
  return (
    <div className="service-page">
      <div className="service-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i> Back to Resume
        </button>
        <div className="service-title">
          <i className="fas fa-cogs"></i>
          <h1>DevOps Automation</h1>
        </div>
      </div>

      <div className="service-content">
        <div className="overview-section">
          <h2>Streamlining Development & Operations</h2>
          <p className="service-description">
            My military background in systems management combined with modern development practices enables me to create 
            robust automation pipelines that reduce manual errors, increase deployment frequency, and improve system reliability.
          </p>
        </div>

        <div className="skills-mapping">
          <div className="skill-category">
            <h3><i className="fas fa-robot"></i> Automation & Orchestration</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Python Automation:</strong> PCEP certified with expertise in scripting deployment processes
              </div>
              <div className="skill-item">
                <strong>Military Precision:</strong> 8 years experience with systematic, repeatable processes
              </div>
              <div className="skill-item">
                <strong>System Integration:</strong> Connecting disparate systems for seamless operations
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-code-branch"></i> CI/CD Pipeline Development</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Version Control:</strong> Git workflows and branching strategies for team collaboration
              </div>
              <div className="skill-item">
                <strong>Continuous Integration:</strong> Automated testing and code quality checks
              </div>
              <div className="skill-item">
                <strong>Deployment Automation:</strong> Zero-downtime deployments with rollback capabilities
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-monitor-heart-rate"></i> Monitoring & Reliability</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>System Monitoring:</strong> Real-time alerting and performance tracking from Enterprise IT experience
              </div>
              <div className="skill-item">
                <strong>Incident Response:</strong> Military-trained rapid response to system failures
              </div>
              <div className="skill-item">
                <strong>Performance Optimization:</strong> Proactive system tuning and resource management
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-layers"></i> Infrastructure as Code</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Configuration Management:</strong> Consistent, repeatable infrastructure deployments
              </div>
              <div className="skill-item">
                <strong>Environment Parity:</strong> Identical dev, staging, and production environments
              </div>
              <div className="skill-item">
                <strong>Scalable Architecture:</strong> Auto-scaling based on demand and traffic patterns
              </div>
            </div>
          </div>
        </div>

        <div className="service-offerings">
          <h2>DevOps Automation Services</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <i className="fas fa-rocket"></i>
              <h4>CI/CD Implementation</h4>
              <p>Automated pipelines that accelerate development cycles and reduce deployment risks</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-chart-area"></i>
              <h4>Monitoring Solutions</h4>
              <p>Comprehensive monitoring with alerting, logging, and performance analytics</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-tools"></i>
              <h4>Process Optimization</h4>
              <p>Streamline workflows to eliminate bottlenecks and reduce time-to-market</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-sync"></i>
              <h4>Legacy Modernization</h4>
              <p>Transform manual processes into automated, reliable operations</p>
            </div>
          </div>
        </div>

        <div className="automation-benefits">
          <h2>Why Automation Matters</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <i className="fas fa-clock"></i>
              <span><strong>75% Faster Deployments:</strong> Reduce release cycles from weeks to hours</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-bug"></i>
              <span><strong>90% Fewer Errors:</strong> Eliminate human error in deployment processes</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-dollar-sign"></i>
              <span><strong>Cost Reduction:</strong> Lower operational costs through efficient resource usage</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-shield-check"></i>
              <span><strong>Enhanced Security:</strong> Automated security scanning and compliance checks</span>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Ready to Automate Your Operations?</h3>
          <p>Let's build a DevOps pipeline that accelerates your development and ensures reliability</p>
          <button className="cta-btn" onClick={() => window.location.href = 'mailto:ellash.np@outlook.com?subject=DevOps Automation Consultation'}>
            <i className="fas fa-envelope"></i>
            Start Automating Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevOpsAutomation;
