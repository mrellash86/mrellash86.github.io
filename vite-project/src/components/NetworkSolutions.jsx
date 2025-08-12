import React from 'react';

const NetworkSolutions = ({ onBack }) => {
  return (
    <div className="service-page">
      <div className="service-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i> Back to Resume
        </button>
        <div className="service-title">
          <i className="fas fa-network-wired"></i>
          <h1>Network Solutions</h1>
        </div>
      </div>

      <div className="service-content">
        <div className="overview-section">
          <h2>Enterprise-Grade Network Infrastructure</h2>
          <p className="service-description">
            With CompTIA Network+ certification and years of military and enterprise experience, I design and implement 
            secure, scalable network solutions that ensure reliable connectivity and optimal performance for your business.
          </p>
        </div>

        <div className="skills-mapping">
          <div className="skill-category">
            <h3><i className="fas fa-certificate"></i> Professional Certifications</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>CompTIA Network+:</strong> Comprehensive understanding of networking concepts, protocols, and troubleshooting
              </div>
              <div className="skill-item">
                <strong>CompTIA A+:</strong> Foundation in hardware, operating systems, and network connectivity
              </div>
              <div className="skill-item">
                <strong>IT Operations Specialist:</strong> Certified in maintaining and optimizing network infrastructures
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-building"></i> Enterprise Experience</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Large-Scale Networks:</strong> 4+ years managing enterprise networks with hundreds of users
              </div>
              <div className="skill-item">
                <strong>Network Security:</strong> Implementation of firewalls, VPNs, and intrusion detection systems
              </div>
              <div className="skill-item">
                <strong>Performance Optimization:</strong> Network monitoring, traffic analysis, and bottleneck resolution
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-shield-alt"></i> Military Network Security</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Classified Networks:</strong> 8 years managing secure military communication systems
              </div>
              <div className="skill-item">
                <strong>High-Availability Systems:</strong> 99.9% uptime requirements for mission-critical networks
              </div>
              <div className="skill-item">
                <strong>Disaster Recovery:</strong> Network redundancy and failover system implementation
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-cloud"></i> Cloud Networking</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>AWS Networking:</strong> VPC, subnets, security groups, and load balancer configuration
              </div>
              <div className="skill-item">
                <strong>Hybrid Solutions:</strong> Seamless integration between on-premise and cloud networks
              </div>
              <div className="skill-item">
                <strong>SD-WAN Implementation:</strong> Software-defined networking for enhanced connectivity
              </div>
            </div>
          </div>
        </div>

        <div className="network-layers">
          <h2>Network Architecture Layers</h2>
          <div className="layers-diagram">
            <div className="layer-item">
              <div className="layer-icon">
                <i className="fas fa-desktop"></i>
              </div>
              <div className="layer-content">
                <h4>Application Layer</h4>
                <p>User applications and services optimization</p>
              </div>
            </div>
            <div className="layer-item">
              <div className="layer-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <div className="layer-content">
                <h4>Transport Layer</h4>
                <p>TCP/UDP protocols and port management</p>
              </div>
            </div>
            <div className="layer-item">
              <div className="layer-icon">
                <i className="fas fa-route"></i>
              </div>
              <div className="layer-content">
                <h4>Network Layer</h4>
                <p>IP routing, subnetting, and VLAN configuration</p>
              </div>
            </div>
            <div className="layer-item">
              <div className="layer-icon">
                <i className="fas fa-link"></i>
              </div>
              <div className="layer-content">
                <h4>Data Link Layer</h4>
                <p>Switch configuration and MAC address management</p>
              </div>
            </div>
            <div className="layer-item">
              <div className="layer-icon">
                <i className="fas fa-ethernet"></i>
              </div>
              <div className="layer-content">
                <h4>Physical Layer</h4>
                <p>Cable management and hardware infrastructure</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-offerings">
          <h2>Network Services Portfolio</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <i className="fas fa-sitemap"></i>
              <h4>Network Design</h4>
              <p>Custom network architecture planning for optimal performance and security</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-tools"></i>
              <h4>Network Implementation</h4>
              <p>Professional installation and configuration of network equipment and services</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-chart-area"></i>
              <h4>Performance Monitoring</h4>
              <p>24/7 network monitoring with proactive issue detection and resolution</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-life-ring"></i>
              <h4>Network Support</h4>
              <p>Ongoing maintenance, troubleshooting, and optimization services</p>
            </div>
          </div>
        </div>

        <div className="network-technologies">
          <h2>Supported Technologies</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h4><i className="fas fa-wifi"></i> Wireless</h4>
              <div className="tech-items">
                <span className="tech-item">Wi-Fi 6/6E</span>
                <span className="tech-item">Enterprise WAPs</span>
                <span className="tech-item">Mesh Networks</span>
                <span className="tech-item">Guest Networks</span>
              </div>
            </div>
            <div className="tech-category">
              <h4><i className="fas fa-shield-check"></i> Security</h4>
              <div className="tech-items">
                <span className="tech-item">Firewalls</span>
                <span className="tech-item">VPN Solutions</span>
                <span className="tech-item">IDS/IPS</span>
                <span className="tech-item">Network Segmentation</span>
              </div>
            </div>
            <div className="tech-category">
              <h4><i className="fas fa-server"></i> Infrastructure</h4>
              <div className="tech-items">
                <span className="tech-item">Managed Switches</span>
                <span className="tech-item">Routers</span>
                <span className="tech-item">Load Balancers</span>
                <span className="tech-item">Network Storage</span>
              </div>
            </div>
            <div className="tech-category">
              <h4><i className="fas fa-cloud"></i> Cloud Integration</h4>
              <div className="tech-items">
                <span className="tech-item">SD-WAN</span>
                <span className="tech-item">Cloud Connectivity</span>
                <span className="tech-item">Hybrid Networks</span>
                <span className="tech-item">Multi-Cloud</span>
              </div>
            </div>
          </div>
        </div>

        <div className="network-benefits">
          <h2>Network Solution Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <i className="fas fa-tachometer-alt"></i>
              <h4>Enhanced Performance</h4>
              <p>Optimized network traffic flow and reduced latency for better user experience</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-shield-alt"></i>
              <h4>Improved Security</h4>
              <p>Multi-layered security approach protecting against cyber threats and data breaches</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-expand-arrows-alt"></i>
              <h4>Scalability</h4>
              <p>Network infrastructure that grows with your business needs and user demands</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-clock"></i>
              <h4>High Availability</h4>
              <p>Redundant systems ensuring 99.9% uptime and business continuity</p>
            </div>
          </div>
        </div>

        <div className="implementation-process">
          <h2>Network Implementation Process</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h4>Assessment & Planning</h4>
                <p>Comprehensive network audit and requirements analysis</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h4>Design & Architecture</h4>
                <p>Custom network design with security and scalability considerations</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h4>Implementation</h4>
                <p>Professional installation with minimal business disruption</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h4>Testing & Optimization</h4>
                <p>Comprehensive testing and performance optimization</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div className="timeline-content">
                <h4>Ongoing Support</h4>
                <p>24/7 monitoring and proactive maintenance services</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Optimize Your Network Infrastructure</h3>
          <p>Let's design a network solution that supports your business growth and security needs</p>
          <button className="cta-btn" onClick={() => window.location.href = 'mailto:ellash.np@outlook.com?subject=Network Solutions Consultation'}>
            <i className="fas fa-envelope"></i>
            Get Network Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkSolutions;
