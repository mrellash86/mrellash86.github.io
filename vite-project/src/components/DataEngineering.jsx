import React from 'react';

const DataEngineering = ({ onBack }) => {
  return (
    <div className="service-page">
      <div className="service-header">
        <button className="back-btn" onClick={onBack}>
          <i className="fas fa-arrow-left"></i> Back to Resume
        </button>
        <div className="service-title">
          <i className="fas fa-database"></i>
          <h1>Data Engineering</h1>
        </div>
      </div>

      <div className="service-content">
        <div className="overview-section">
          <h2>Transform Data Into Business Intelligence</h2>
          <p className="service-description">
            Leveraging my experience in enterprise systems management and Python automation, I design and implement 
            data pipelines that turn raw information into actionable business insights with military-grade reliability.
          </p>
        </div>

        <div className="skills-mapping">
          <div className="skill-category">
            <h3><i className="fab fa-python"></i> Data Processing & Analytics</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Python PCEP Certified:</strong> Advanced scripting for data extraction, transformation, and loading (ETL)
              </div>
              <div className="skill-item">
                <strong>Data Pipeline Architecture:</strong> Designing scalable, fault-tolerant data processing systems
              </div>
              <div className="skill-item">
                <strong>Real-time Analytics:</strong> Stream processing and live data analysis capabilities
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-cloud-download"></i> Cloud Data Solutions</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>AWS Data Services:</strong> S3, RDS, Redshift, and Lambda for cloud-native data solutions
              </div>
              <div className="skill-item">
                <strong>Serverless Processing:</strong> Cost-effective data processing using AWS Lambda and event-driven architecture
              </div>
              <div className="skill-item">
                <strong>Data Lake Architecture:</strong> Scalable storage solutions for structured and unstructured data
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-server"></i> Enterprise Data Management</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>System Integration:</strong> 4+ years connecting disparate enterprise systems and data sources
              </div>
              <div className="skill-item">
                <strong>Database Optimization:</strong> SQL query optimization and performance tuning for large datasets
              </div>
              <div className="skill-item">
                <strong>Data Governance:</strong> Military experience with strict data handling and compliance requirements
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3><i className="fas fa-chart-line"></i> Business Intelligence</h3>
            <div className="skill-items">
              <div className="skill-item">
                <strong>Dashboard Development:</strong> Interactive data visualizations using modern web technologies
              </div>
              <div className="skill-item">
                <strong>Automated Reporting:</strong> Scheduled reports and alerts for key business metrics
              </div>
              <div className="skill-item">
                <strong>Predictive Analytics:</strong> Machine learning integration for forecasting and trend analysis
              </div>
            </div>
          </div>
        </div>

        <div className="data-pipeline">
          <h2>Data Engineering Pipeline</h2>
          <div className="pipeline-flow">
            <div className="pipeline-step">
              <div className="step-icon">
                <i className="fas fa-download"></i>
              </div>
              <h4>Data Ingestion</h4>
              <p>Collect data from multiple sources including APIs, databases, files, and streaming services</p>
            </div>
            <div className="pipeline-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="pipeline-step">
              <div className="step-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h4>Data Processing</h4>
              <p>Clean, transform, and enrich data using automated Python scripts and cloud services</p>
            </div>
            <div className="pipeline-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="pipeline-step">
              <div className="step-icon">
                <i className="fas fa-database"></i>
              </div>
              <h4>Data Storage</h4>
              <p>Store processed data in optimized databases and data warehouses for fast querying</p>
            </div>
            <div className="pipeline-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
            <div className="pipeline-step">
              <div className="step-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h4>Data Visualization</h4>
              <p>Present insights through interactive dashboards and automated reporting systems</p>
            </div>
          </div>
        </div>

        <div className="service-offerings">
          <h2>Data Engineering Services</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <i className="fas fa-stream"></i>
              <h4>ETL Pipeline Development</h4>
              <p>Automated data extraction, transformation, and loading with error handling and monitoring</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-warehouse"></i>
              <h4>Data Warehouse Design</h4>
              <p>Scalable data storage solutions optimized for analytics and business intelligence</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-eye"></i>
              <h4>Data Quality Monitoring</h4>
              <p>Automated data validation and quality assurance with alerting systems</p>
            </div>
            <div className="offering-card">
              <i className="fas fa-robot"></i>
              <h4>Process Automation</h4>
              <p>Eliminate manual data tasks with intelligent automation and scheduling</p>
            </div>
          </div>
        </div>

        <div className="data-sources">
          <h2>Supported Data Sources</h2>
          <div className="sources-grid">
            <div className="source-item">
              <i className="fas fa-database"></i>
              <span>SQL Databases</span>
            </div>
            <div className="source-item">
              <i className="fas fa-leaf"></i>
              <span>NoSQL Databases</span>
            </div>
            <div className="source-item">
              <i className="fas fa-file-csv"></i>
              <span>CSV/Excel Files</span>
            </div>
            <div className="source-item">
              <i className="fas fa-plug"></i>
              <span>REST APIs</span>
            </div>
            <div className="source-item">
              <i className="fas fa-stream"></i>
              <span>Real-time Streams</span>
            </div>
            <div className="source-item">
              <i className="fas fa-cloud"></i>
              <span>Cloud Services</span>
            </div>
            <div className="source-item">
              <i className="fas fa-file-code"></i>
              <span>Log Files</span>
            </div>
            <div className="source-item">
              <i className="fas fa-share-alt"></i>
              <span>Social Media</span>
            </div>
          </div>
        </div>

        <div className="use-cases">
          <h2>Common Use Cases</h2>
          <div className="use-case-cards">
            <div className="use-case-card">
              <i className="fas fa-chart-pie"></i>
              <h4>Business Analytics</h4>
              <p>Revenue tracking, customer behavior analysis, and performance metrics dashboards</p>
            </div>
            <div className="use-case-card">
              <i className="fas fa-users-cog"></i>
              <h4>Customer Intelligence</h4>
              <p>360-degree customer view combining CRM, support, and usage data</p>
            </div>
            <div className="use-case-card">
              <i className="fas fa-industry"></i>
              <h4>Operational Intelligence</h4>
              <p>Supply chain optimization, inventory management, and process monitoring</p>
            </div>
            <div className="use-case-card">
              <i className="fas fa-shield-check"></i>
              <h4>Compliance Reporting</h4>
              <p>Automated regulatory reports and audit trail maintenance</p>
            </div>
          </div>
        </div>

        <div className="benefits-section">
          <h2>Data Engineering Benefits</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <i className="fas fa-clock"></i>
              <span><strong>80% Time Savings:</strong> Automated data processing eliminates manual tasks</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-chart-line"></i>
              <span><strong>Real-time Insights:</strong> Make data-driven decisions with current information</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-dollar-sign"></i>
              <span><strong>Cost Reduction:</strong> Optimize cloud resources and reduce infrastructure costs</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-shield-alt"></i>
              <span><strong>Data Security:</strong> Military-grade security protocols for sensitive data</span>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Transform Your Data Into Insights</h3>
          <p>Let's build a data engineering solution that powers your business decisions</p>
          <button className="cta-btn" onClick={() => window.location.href = 'mailto:ellash.np@outlook.com?subject=Data Engineering Consultation'}>
            <i className="fas fa-envelope"></i>
            Start Your Data Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataEngineering;
