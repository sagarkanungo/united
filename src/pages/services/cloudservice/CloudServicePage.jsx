import React from "react";
import "./cloudservice.css";
import { useContext } from "react";
import { useLoading } from "../../../context/LoadingContext";

function CloudServicePage() {
  const { loading, setLoading } = useLoading();

  return (
    <>
      <div className="cloudService-heading-container">
        <div className="main-heading">
          <h2>Cloud Services</h2>
        </div>
      </div>

      <div className="cloudService-content-container">
        <div className="cloudService-content-wrapper">
          {/* Left Side - Main Content */}
          <div className="cloudService-left-side">
            <div className="top-image">
              <img
                src="/assets/cloudservice1.jpg"
                alt="Cloud Services"
                loading="lazy"
                onLoad={setLoading(true)}
              />
            </div>

            <div className="cloudService-text-section">
              <h3>Cloud Services to Elevate Your Business by theitunited</h3>
              <p>
                In today’s fast-evolving digital landscape, cloud computing has
                become the backbone of modern business operations. At
                theitunited, we offer comprehensive cloud services designed to
                accelerate your digital transformation, enhance scalability, and
                optimize costs. Whether you’re a startup or an established
                enterprise, our tailored cloud solutions empower your business
                to stay agile, competitive, and secure in the digital era.
              </p>
              <p>
                Utilizing leading technologies such as AWS, Microsoft Azure, and
                Google Cloud, we help businesses enhance productivity, drive
                innovation, and ensure data security. With services in cloud
                migration, management, and disaster recovery, theitunited ensures
                your data is always secure, accessible, and optimized for
                growth.
              </p>
              <p>
                Trust theitunited for cloud solutions that scale with your
                business for long-term success and efficiency.
              </p>

              <h4>Why Choose Us</h4>
              <ul>
                <li>Tailored cloud solutions that align with your business goals.</li>
                <li>Scalable, secure infrastructure for seamless growth.</li>
                <li>24/7 expert support ensuring uninterrupted service.</li>
                <li>Cost-efficient cloud strategies for maximum ROI.</li>
              </ul>

              <h4>Our Cloud Service Offerings</h4>
              <ul>
                <li>
                  <strong>Cloud Migration:</strong> Seamlessly transition your
                  existing infrastructure to the cloud with minimal downtime.
                </li>
                <li>
                  <strong>Cloud Infrastructure Management:</strong> Simplify your
                  IT operations with robust management solutions.
                </li>
                <li>
                  <strong>Hybrid Cloud Solutions:</strong> Flexibility between
                  on-premises and cloud systems tailored to your needs.
                </li>
                <li>
                  <strong>Data Storage and Backup:</strong> Scalable, secure, and
                  reliable storage with automated backup and disaster recovery.
                </li>
                <li>
                  <strong>DevOps on Cloud:</strong> Streamline development with
                  CI/CD and DevOps tools integrated into your cloud environment.
                </li>
                <li>
                  <strong>Cloud Security Services:</strong> Advanced protection
                  including encryption, access control, and auditing.
                </li>
                <li>
                  <strong>Cloud Application Development:</strong> Custom cloud
                  apps designed for performance and scalability.
                </li>
              </ul>

              <h4>Technologies We Leverage for Cloud Services</h4>
              <p>
                At theitunited, we work with leading cloud platforms and tools to
                deliver reliable and scalable solutions:
              </p>
              <ul>
                <li>
                  <strong>Cloud Platforms:</strong> AWS, Microsoft Azure, Google
                  Cloud Platform (GCP), IBM Cloud
                </li>
                <li>
                  <strong>DevOps Tools:</strong> Jenkins, Kubernetes, Docker, Terraform
                </li>
                <li>
                  <strong>Storage Solutions:</strong> Amazon S3, Google Drive,
                  Azure Blob Storage
                </li>
                <li>
                  <strong>Security and Compliance:</strong> CloudTrail, IAM
                  (Identity Access Management), Cloud Security Posture Management
                </li>
              </ul>

              <h4>Benefits of Our Cloud Services</h4>
              <ul>
                <li>
                  <strong>Enhanced Collaboration:</strong> Cloud solutions enable
                  your teams to collaborate effectively from anywhere.
                </li>
                <li>
                  <strong>Increased Efficiency:</strong> Automate and streamline
                  operations with modern cloud infrastructure.
                </li>
                <li>
                  <strong>Business Continuity:</strong> Ensure data availability
                  and uptime through robust backup and recovery.
                </li>
                <li>
                  <strong>Security & Compliance:</strong> Meet industry standards
                  with advanced security tools and protocols.
                </li>
              </ul>

              <div className="cloudService-cta-section">
                <h3>Ready to Embrace the Cloud?</h3>
                <p>
                  Partner with theitunited and unlock the full potential of
                  cloud computing. Reach out to our experts to discuss how our
                  cloud services can transform your business.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="cloudService-right-side">
            <div className="cloudService-right-top-image">
              <img
                src="/assets/cloudservice2.jpg"
                alt="Cloud Strategy"
                loading="lazy"
              />
            </div>
            <div className="cloudService-right-bottom-image">
              <img
                src="/assets/cloudservice3.jpg"
                alt="Cloud Management"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CloudServicePage;
