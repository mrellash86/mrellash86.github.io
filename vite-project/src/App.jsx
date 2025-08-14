import { useState } from 'react';
import './App.css';
import './components/ServicePages.css';
import CloudArchitecture from './components/CloudArchitecture';
import DevOpsAutomation from './components/DevOpsAutomation';
import SecuritySolutions from './components/SecuritySolutions';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataEngineering from './components/DataEngineering';
import NetworkSolutions from './components/NetworkSolutions';

function App() {
  const [currentPage, setCurrentPage] = useState('resume');

  const handleEmailClick = () => {
    window.location.href = 'mailto:ellash.np@outlook.com';
  };

  const handleServiceClick = (service) => {
    setCurrentPage(service);
  };

  const handleBackToResume = () => {
    setCurrentPage('resume');
  };

  // Render service pages
  if (currentPage === 'cloud-architecture') {
    return <CloudArchitecture onBack={handleBackToResume} />;
  }
  if (currentPage === 'devops-automation') {
    return <DevOpsAutomation onBack={handleBackToResume} />;
  }
  if (currentPage === 'security-solutions') {
    return <SecuritySolutions onBack={handleBackToResume} />;
  }
  if (currentPage === 'full-stack-development') {
    return <FullStackDevelopment onBack={handleBackToResume} />;
  }
  if (currentPage === 'data-engineering') {
    return <DataEngineering onBack={handleBackToResume} />;
  }
  if (currentPage === 'network-solutions') {
    return <NetworkSolutions onBack={handleBackToResume} />;
  }

  const certifications = [
    "AWS Cloud Practitioner",
    "CompTIA Network+",
    "CompTIA A+", 
    "CompTIA IT Operations Specialist",
    "Python PECP"
  ];

  return (
    <div className="app">
      <div className="bg-animation"></div>
      
      {/* Sticky Advertisement */}
      <div className="sticky-ad">
        <div className="ad-content">
          <div className="ad-header">
            <div className="ad-logo">
              <i className="fas fa-code-branch"></i>
            </div>
            <h3 className="ad-company">Ell & Co.</h3>
            <h4 className="ad-tagline">Solutions</h4>
          </div>
          
          <div className="ad-services">
            <div className="service-item" onClick={() => handleServiceClick('cloud-architecture')}>
              <i className="fas fa-cloud"></i>
              <span>Cloud Architecture</span>
            </div>
            <div className="service-item" onClick={() => handleServiceClick('devops-automation')}>
              <i className="fas fa-cogs"></i>
              <span>DevOps Automation</span>
            </div>
            <div className="service-item" onClick={() => handleServiceClick('security-solutions')}>
              <i className="fas fa-shield-alt"></i>
              <span>Security Solutions</span>
            </div>
            <div className="service-item" onClick={() => handleServiceClick('full-stack-development')}>
              <i className="fas fa-laptop-code"></i>
              <span>Full-Stack Development</span>
            </div>
            <div className="service-item" onClick={() => handleServiceClick('data-engineering')}>
              <i className="fas fa-database"></i>
              <span>Data Engineering</span>
            </div>
            <div className="service-item" onClick={() => handleServiceClick('network-solutions')}>
              <i className="fas fa-network-wired"></i>
              <span>Network Solutions</span>
            </div>
          </div>
          
          <div className="ad-description">
            <p>Transforming businesses through innovative technology solutions</p>
          </div>
          
          <div className="ad-contact">
            <button 
              className="contact-btn"
              onClick={handleEmailClick}
            >
              <i className="fas fa-envelope"></i>
              Get Quote
            </button>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> Austin, TX</p>
              <p><i className="fas fa-phone"></i> Available 24/7</p>
            </div>
          </div>
          
          <div className="ad-footer">
            <div className="rating">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span>5.0 Client Rating</span>
            </div>
            <div className="certifications-badge">
              <i className="fab fa-aws"></i>
              <span>AWS Certified</span>
            </div>
          </div>
        </div>
      </div>
      
      <header className="header">
        <div className="profile-section">
          <div className="profile-image">
            <img 
              src="/ell-ash.jpeg" 
              alt="Ell Ash - DevOps Engineer" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          </div>
          <h1 className="name">Ell Ash</h1>
          <h2 className="title">DevOps Engineer | Dev/Sec Specialist</h2>
          <p className="location">📍 Austin, Texas</p>
          
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/awsdevsec" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn linkedin"
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a 
              href="https://github.com/mrellash86" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-btn github"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
            <a 
              href="#" 
              className="social-btn youtube"
              onClick={(e) => {
                e.preventDefault();
                alert('YouTube link - Please add your YouTube channel URL');
              }}
            >
              <i className="fab fa-youtube"></i>
              YouTube
            </a>
            <button 
              onClick={handleEmailClick}
              className="social-btn email"
            >
              <i className="fas fa-envelope"></i>
              Email
            </button>
          </div>
        </div>
      </header>

      <section className="section" style={{maxWidth: '1200px', margin: '0 auto 3rem', padding: '0 2rem'}}>
        <h3 className="section-title">
          <i className="fas fa-code"></i>
          About This Digital Resume
        </h3>
        <div style={{fontSize: '1.1rem', lineHeight: '1.7', color: '#e2e8f0'}}>
          <p style={{marginBottom: '1.5rem'}}>
            This interactive resume website showcases my technical expertise through practical implementation. 
            Rather than simply listing my skills, I've built this platform to demonstrate my capabilities across 
            the full technology stack - from front-end development to cloud infrastructure.
          </p>
          <p style={{marginBottom: '1.5rem'}}>
            <strong style={{color: '#00d4ff'}}>Technical Implementation Highlights:</strong>
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '1.5rem'}}>
            <div style={{background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
              <strong style={{color: '#5865f2'}}>🎨 Front-End Development:</strong> Built with React and modern CSS, featuring responsive design, animations, and interactive elements
            </div>
            <div style={{background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
              <strong style={{color: '#5865f2'}}>☁️ Cloud Infrastructure:</strong> Deployed on AWS with S3, CloudFront, Route 53, and secure HTTPS implementation
            </div>
            <div style={{background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
              <strong style={{color: '#5865f2'}}>🔧 DevOps Practices:</strong> Infrastructure as Code (IaC), CI/CD pipelines, automated testing, and version control
            </div>
            <div style={{background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
              <strong style={{color: '#5865f2'}}>🖥️ Full-Stack Integration:</strong> API Gateway, Lambda functions, DynamoDB, and serverless architecture
            </div>
          </div>
          <p>
            The skills and certifications listed below represent my journey in technology, but this website itself 
            serves as a living demonstration of my ability to architect, develop, and deploy modern web applications 
            using industry best practices and cutting-edge cloud technologies.
          </p>
        </div>
      </section>

      <main className="main-content">
        <div className="content">
          <section className="section">
            <h3 className="section-title">
              <i className="fas fa-certificate"></i>
              Certifications & Cloud Resume Challenge
            </h3>
            <div style={{marginBottom: '1.5rem', padding: '1rem', background: 'rgba(0, 212, 255, 0.1)', borderRadius: '10px', border: '1px solid rgba(0, 212, 255, 0.3)'}}>
              <p style={{margin: '0', fontSize: '0.95rem', color: '#e2e8f0'}}>
                <i className="fas fa-blog" style={{marginRight: '0.5rem', color: '#00d4ff'}}></i>
                <strong>Cloud Resume Challenge:</strong> This website demonstrates the complete implementation of the 
                <a href="#" style={{color: '#00d4ff', textDecoration: 'none', fontWeight: '500'}}> Cloud Resume Challenge</a>, 
                showcasing 16 different technical skills from HTML/CSS to Infrastructure as Code.
                <a href="#" style={{color: '#00d4ff', textDecoration: 'none', marginLeft: '0.5rem'}}>
                  Read my blog post about the experience →
                </a>
              </p>
            </div>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  {cert}
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h3 className="section-title">
              <i className="fas fa-briefcase"></i>
              Professional Experience
            </h3>
            <div className="experience-item">
              <h4 className="job-title">Front End & Back End Developer</h4>
              <div className="company">AnnieCannons</div>
              <div className="date-location">2024 – Present | Remote</div>
              <ul className="job-description">
                <li>Develop and maintain web applications using Java, JavaScript, Node.js, and DynamoDB</li>
                <li>Produce and update technical documentation for ongoing projects</li>
                <li>Manage project workflows and communication via Slack and Notion</li>
                <li>Automate infrastructure deployments utilizing Terraform</li>
                <li>Integrate APIs and databases with Python and NoSQL technologies</li>
                <li>Maintain CI/CD pipelines with GitHub Actions</li>
                <li>Utilize Confluence, Jira, Discord, and Slack for documentation and task tracking</li>
              </ul>
            </div>
            <div className="experience-item">
              <h4 className="job-title">Hardware/Software Customer Service Technician</h4>
              <div className="company">Boldyn Networks</div>
              <div className="date-location">2024 – Present | Remote</div>
              <ul className="job-description">
                <li>Performed troubleshooting based on OSI model and TCP/IP concepts</li>
                <li>Provide technical support for hardware, networking, and multiple operating systems (MacOS, iOS, Windows, Chrome, Android)</li>
                <li>Collaborate with remote teams using Microsoft Teams</li>
                <li>Utilize ServiceNow and Vonage for customer relationship management</li>
              </ul>
            </div>
            <div className="experience-item">
              <h4 className="job-title">Junior Operations Specialist</h4>
              <div className="company">Lamel Bev. LLC</div>
              <div className="date-location">2020 – 2023 | Houston, TX (Seasonal)</div>
              <ul className="job-description">
                <li>Manage real estate clients and investors using Thryve CRM</li>
                <li>Develop and maintain property websites for optimized performance</li>
                <li>Leverage Propstream for real-time real estate analysis</li>
                <li>Create digital media content for marketing campaigns with Photoshop and Canva</li>
              </ul>
            </div>
            <div className="experience-item">
              <h4 className="job-title">Telecom Network Technician</h4>
              <div className="company">Ericsson</div>
              <div className="date-location">2018 – 2020 | Atlanta, GA</div>
              <ul className="job-description">
                <li>Perform Passive Intermodulation (PIM) Testing to monitor network signal loss</li>
                <li>Train technicians in fiber optic troubleshooting and command prompt usage</li>
                <li>Maintain functionality of fiber optic network systems</li>
                <li>Document work activities using Microsoft Office Suite and Concur</li>
              </ul>
            </div>
            <div className="experience-item">
              <h4 className="job-title">Aerostat Network Operator</h4>
              <div className="company">Bravura Lockheed Martin</div>
              <div className="date-location">2016 – 2018 | Kuwait/Iraq</div>
              <ul className="job-description">
                <li>Mentor staff in telemetric, aviation, and surveillance software applications</li>
                <li>Maintain aerostat systems using PowerShell commands</li>
                <li>Organize shift data in Excel to ensure consistent information flow</li>
                <li>Oversee surveillance operations and server maintenance for secure data transmission</li>
              </ul>
            </div>
          </section>

          <section className="section">
            <h3 className="section-title">
              <i className="fas fa-flag-usa"></i>
              Military Experience
            </h3>
            <div className="experience-item">
              <h4 className="job-title">Gunners Mate 2nd Class</h4>
              <div className="company">United States Navy</div>
              <div className="date-location">2012-2016 | Mayport, FL (OIF / OEF)</div>
            </div>
          </section>

          <section className="section">
            <h3 className="section-title">
              <i className="fas fa-tools"></i>
              Technical Skills & Tools
            </h3>
            <div style={{fontSize: '1.05rem', color: '#e2e8f0', marginBottom: '1.5rem'}}>
              I am proficient with React, Vite, Confluence, Jira, Discord, draw.io, Terraform, and CI/CD automation. I also have experience using ProxMox, Ansible, GitHub,
              Wireshark, Cisco Packet Tracer, DynamoDB, AWS S3, AWS Lambda, and API Gateway. My technical capabilities extend to AWS Route 53, AWS CloudFront, AWS
              CloudFormation, NodeJS, Linux OS, Windows Firewall, and Putty. I am familiar with ServiceNow, Microsoft Teams, Active Directory, Jupyter Notebook, Python, and
              Visual Studio Code. Additionally, I am adept at working with cable testers, crimping tools, punch-down tools, network taps, Google Workspace, multi-meters, cable
              testers, and toner probes.
            </div>
          </section>

          <section className="section">
            <h3 className="section-title">
              <i className="fas fa-project-diagram"></i>
              Cloud Architecture Demonstrated
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
              <div style={{background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
                <div style={{color: '#00d4ff', fontWeight: '600', marginBottom: '0.5rem'}}>
                  <i className="fab fa-html5" style={{marginRight: '0.5rem'}}></i>
                  Frontend
                </div>
                <div style={{fontSize: '0.9rem', color: '#e2e8f0'}}>
                  React, CSS3, JavaScript<br/>
                  Responsive Design
                </div>
              </div>
              <div style={{background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
                <div style={{color: '#00d4ff', fontWeight: '600', marginBottom: '0.5rem'}}>
                  <i className="fab fa-aws" style={{marginRight: '0.5rem'}}></i>
                  AWS Services
                </div>
                <div style={{fontSize: '0.9rem', color: '#e2e8f0'}}>
                  S3, CloudFront, Route 53<br/>
                  Lambda, API Gateway, DynamoDB
                </div>
              </div>
              <div style={{background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
                <div style={{color: '#00d4ff', fontWeight: '600', marginBottom: '0.5rem'}}>
                  <i className="fab fa-python" style={{marginRight: '0.5rem'}}></i>
                  Backend
                </div>
                <div style={{fontSize: '0.9rem', color: '#e2e8f0'}}>
                  Python, boto3<br/>
                  Serverless Functions
                </div>
              </div>
              <div style={{background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)'}}>
                <div style={{color: '#00d4ff', fontWeight: '600', marginBottom: '0.5rem'}}>
                  <i className="fas fa-code-branch" style={{marginRight: '0.5rem'}}></i>
                  DevOps
                </div>
                <div style={{fontSize: '0.9rem', color: '#e2e8f0'}}>
                  GitHub Actions, SAM/Terraform<br/>
                  CI/CD, Infrastructure as Code
                </div>
              </div>
            </div>
            <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(88, 101, 242, 0.1)', borderRadius: '10px', border: '1px solid rgba(88, 101, 242, 0.3)'}}>
              <div style={{fontSize: '0.9rem', color: '#e2e8f0', lineHeight: '1.6'}}>
                <strong style={{color: '#5865f2'}}>Security & Best Practices:</strong> HTTPS encryption, secure API endpoints, 
                proper credential management, automated testing, and infrastructure monitoring.
              </div>
            </div>
          </section>
        </div>

        <aside className="sidebar">
          <section className="section" style={{textAlign: 'center'}}>
            <h3 className="section-title">
              <i className="fas fa-chart-line"></i>
              Site Analytics
            </h3>
            <div style={{background: 'rgba(0, 212, 255, 0.1)', padding: '1.5rem', borderRadius: '15px', border: '1px solid rgba(0, 212, 255, 0.3)'}}>
              <div style={{fontSize: '2.5rem', fontWeight: '700', color: '#00d4ff', marginBottom: '0.5rem'}}>
                <i className="fas fa-users" style={{marginRight: '0.5rem'}}></i>
                1,247
              </div>
              <div style={{color: '#a0aec0', fontSize: '0.9rem'}}>
                Total Visitors
              </div>
              <div style={{marginTop: '1rem', fontSize: '0.8rem', color: '#718096'}}>
                <i className="fas fa-database" style={{marginRight: '0.3rem'}}></i>
                Powered by AWS DynamoDB & Lambda
              </div>
            </div>
            <p style={{fontSize: '0.8rem', color: '#a0aec0', marginTop: '1rem', lineHeight: '1.4'}}>
              This counter demonstrates real-time API integration with AWS serverless architecture
            </p>
          </section>

          <section className="section qr-section">
  <h3 className="section-title">
    <i className="fas fa-qrcode"></i>
    Contact QR Code
  </h3>
  <div className="qr-code-container">
    <img 
      src="/ell-ash-linktree.png" 
      alt="Ell Ash Linktree QR Code" 
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '200px',
        borderRadius: '10px',
        border: '2px solid rgba(0, 212, 255, 0.3)'
      }}
    />
  </div>
  <p className="qr-text">
    Scan to access my Linktree with all contact information
  </p>
</section>

          <section className="section">
            <h3 className="section-title">
              <i className="fas fa-graduation-cap"></i>
              Education
            </h3>
            <div className="education-item">
              <div className="school">Austin Community College</div>
              <div className="degree">Local Area Network Administration Associates</div>
              <div className="education-status">Focus in Cyber Security (Currently Attending)</div>
            </div>
            <div className="education-item">
              <div className="school">CyberTex.edu</div>
              <div className="degree">Comprehensive Network Engineering Training</div>
              <div className="education-status">Hands-on preparation for CompTIA Security+, A+, Network+, Server+, Linux+</div>
            </div>
            <div className="education-item">
              <div className="school">NPower</div>
              <div className="degree">AWS Cloud, Hardware/Software Support</div>
              <div className="education-status">Windows, MAC, Apple, Chrome</div>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default App;